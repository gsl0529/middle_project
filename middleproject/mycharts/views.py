from __future__ import unicode_literals
import math
import os
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
import pymysql
import pandas as pd
from pyecharts import *
import time
# Create your views here.
class Data():
    def __init__(self,name):
        self.name = name
        conn=pymysql.connect("localhost","root","123456","game",charset='utf8')
        sql="select * from user_info"
        df0=pd.read_sql(sql,conn)
        self.df=pd.DataFrame(df0)
        sql1="select name,game,game_times,game_win from user_game"
        df_game=pd.read_sql(sql1,conn)
        self.game_data0=pd.DataFrame(df_game)
        sql="select * from user_signin"
        df_signin=pd.read_sql(sql,conn)
        self.signin_data0=pd.DataFrame(df_signin)

    def _map(self):
        df=self.df
        #注册用户分布
        city_list=[
        "河北","山西","吉林","辽宁","黑龙江",
        "陕西","甘肃","青海","山东","福建",
        "浙江","台湾","河南","湖北","湖南",
        "江西","江苏","安徽","广东","海南",
        "四川","贵州","云南","北京","上海",
        "天津","重庆","内蒙古","新疆","宁夏",
        "广西","西藏","香港","澳门"]
        address_data=df[df.address.isin(city_list)]['address'].value_counts()
        address_attr = address_data.index
        map = Map("", width='%100', height=800,title_pos='50%',title_top='top')
        map.add("", address_attr, address_data, maptype='china', visual_range=[address_data.min(), address_data.max()],is_visualmap=True,
                visual_text_color='#000',is_toolbox_show=False)
        return map

    def _prop(self):
        df=self.df
        #道具平均持有量
        prop_attr = ["会员卡", "积分清零卡", "改名卡"]
        prop_data=[df.prop1.mean().round(2),df.prop2.mean().round(2),df.prop3.mean().round(2)]

        bar=Bar('道具平均持有量',title_pos="20%")

        bar.add("", prop_attr,prop_data,bar_category_gap='40%',is_label_show=True,is_toolbox_show=False)

        pie = Pie("道具占比", title_pos="69%")
        pie.add("",prop_attr,prop_data,radius=['40%', '60%'],center=['72%','50%'],legend_pos="88%",legend_orient="vertical",is_toolbox_show=False,is_label_show=True,label_text_size=14)

        grid = Grid(width=1450)
        grid.add(bar, grid_right="55%",)
        grid.add(pie, grid_left="70%",)

        return grid

    def _point(self):
        df=self.df
        point_data0=df.sort_values(by='point',ascending=True)[['name','point']].tail(10)

        point_attr=point_data0.name
        point_data=point_data0.point

        bar_point = Bar("积分TOP10",width='100%')
        bar_point.add("", point_attr, point_data,is_xaxis_show=False,is_label_show=True,label_text_color='#006699',
        label_pos='right',is_convert=True,is_toolbox_show=False,xaxis_min=point_data.min()-150,bar_category_gap=10)

        return bar_point

    def _winrate_all(self):
        game_data0=self.game_data0
        game_data0=game_data0[game_data0.game_times>30]
        page = Page()
        data=game_data0.game_win.div(game_data0.game_times)
        game_data0['win_rate']=data.round(5)

        data_game1=game_data0[game_data0.game=='五子棋'].sort_values(by='win_rate')[['name','win_rate']].tail(5)
        data_game2=game_data0[game_data0.game=='猜拳'].sort_values(by='win_rate')[['name','win_rate']].tail(5)
        data_game3=game_data0[game_data0.game=='比反应'].sort_values(by='win_rate')[['name','win_rate']].tail(5)
        attr_game1=data_game1.name
        attr_game2=data_game2.name
        attr_game3=data_game3.name
        bar_game1=Bar('五子棋胜率',height=300,width='100%',title_pos='center')
        bar_game1.add('',attr_game1,data_game1.win_rate,is_splitline_show=False,is_convert=True,is_xaxis_show=False,is_label_show=True,
        label_text_color='#006699',label_pos='right',bar_category_gap=8,xaxis_min=data_game1.win_rate.values.min()-0.001,xaxis_max=data_game1.win_rate.values.max(),is_toolbox_show=False,label_color=['grey'])
        bar_game2=Bar('猜拳胜率',height=300,width='100%',title_pos='center')
        bar_game2.add('',attr_game2,data_game2.win_rate,is_splitline_show=False,is_convert=True,is_xaxis_show=False,is_label_show=True,
        label_text_color='#006699',label_pos='right',bar_category_gap=8,xaxis_min=data_game2.win_rate.values.min()-0.001,xaxis_max=data_game2.win_rate.values.max(),is_toolbox_show=False,label_color=['green'])
        bar_game3=Bar('比反应胜率',height=300,width='100%',title_pos='center')
        bar_game3.add('',attr_game3,data_game3.win_rate,is_splitline_show=False,is_convert=True,is_xaxis_show=False,is_label_show=True,
        label_text_color='#006699',label_pos='right',bar_category_gap=8,xaxis_min=data_game3.win_rate.values.min()-0.001,xaxis_max=data_game3.win_rate.values.max(),is_toolbox_show=False,label_color=['#006699'])

        page.add(bar_game1)
        page.add(bar_game2)
        page.add(bar_game3)
        return page

    def _winrate(self):
        name=self.name
        game_data0=self.game_data0
        user_data0=game_data0[game_data0.name ==name]

        game1_user_data0=user_data0[user_data0.game =='五子棋']
        game2_user_data0=user_data0[user_data0.game =='猜拳']
        game3_user_data0=user_data0[user_data0.game =='比反应']


        pie_game_user1 = Pie('五子棋',height=250,width='100%',title_pos='center')
        pie_game_user2 = Pie('猜拳',height=250,width='100%',title_pos='center')
        pie_game_user3 = Pie('比反应',height=250,width='100%',title_pos='center')
        style = Style()
        pie_style = style.add(
            label_pos="center",
            is_label_show=True,
            label_text_color=None,
            is_toolbox_show=False,
            label_text_size=14,
            legend_top='bottom',
            legend_pos='37%',
        )
        pie_game_user1.add("五子棋", ["胜", "负"], [game1_user_data0.game_win, game1_user_data0.game_times-game1_user_data0.game_win], center=['50%', '50%'],
                radius=['50%', '80%'], **pie_style)
        pie_game_user2.add("猜拳", ["胜", "负"], [game2_user_data0.game_win, game2_user_data0.game_times-game2_user_data0.game_win], center=['50%', '50%'],
                radius=['50%', '80%'], **pie_style)
        pie_game_user3.add("比反应", ["胜", "负"],[game3_user_data0.game_win, game3_user_data0.game_times-game3_user_data0.game_win], center=['50%', '50%'],
                radius=['50%', '80%'],**pie_style)

        return pie_game_user1,pie_game_user2,pie_game_user3,

    def _signin_all(self):
        signin_data0 = self.signin_data0
        zipp3=list(zip(signin_data0.groupby('datetime').count().index.values,signin_data0.groupby('datetime').count().name.values))
        heatmap1 = HeatMap("", width=1450,height=390)
        heatmap1.add("",zipp3,is_calendar_heatmap=True,calendar_cell_size=[25, 40],
        is_visualmap=True,
        calendar_date_range="2018",
        visual_orient="vertical",visual_pos='right',
        visual_text_color='#000', visual_range_text=['', ''],
        visual_range=[signin_data0.groupby('datetime').count().values.min(), signin_data0.groupby('datetime').count().values.max()],
        is_toolbox_show=False)
        return heatmap1

    def _signin(self):
        name = self.name
        signin_data0 = self.signin_data0
        signin_data_1=signin_data0[signin_data0['name'] ==name].datetime
        zipp=list(zip(signin_data_1.values,[1 for i in range(len(signin_data_1.values))]))
        heatmap2 = HeatMap("", width=1450,height=350)
        heatmap2.add("",zipp,is_calendar_heatmap=True,calendar_cell_size=[25, 35],calendar_date_range="2018",is_toolbox_show=False)
        return heatmap2

    def _click(self):
        df = self.df
        game_data0 = self.game_data0
        point_address=df[["name","address"]]
        point_game=game_data0[["name","game","game_times"]]
        point_game0=pd.merge(point_game,point_address)
        point_game1=point_game0[point_game0.game == '五子棋'][['game_times','address']].sort_values(by='address').groupby('address').sum()
        point_game2=point_game0[point_game0.game == '猜拳'][['game_times','address']].sort_values(by='address').groupby('address').sum()
        point_game3=point_game0[point_game0.game == '比反应'][['game_times','address']].sort_values(by='address').groupby('address').sum()
        bar_point = Bar("",width='100%')
        bar_point.add("五子棋", point_game1.index,point_game1.game_times, is_stack=True,mark_point=['min','max'],mark_point_symbolsize=80)
        bar_point.add("猜拳",  point_game1.index,point_game2.game_times, is_stack=True,mark_point=['min','max'],mark_point_symbolsize=80)
        bar_point.add("比反应",point_game1.index,point_game3.game_times,mark_point=['min','max'],is_toolbox_show=False, xaxis_interval=0,xaxis_rotate=45,is_stack=True,
        is_datazoom_show=True,datazoom_type='both',datazoom_range=[5,25],mark_point_symbolsize=80)

        return bar_point

def name_views(request,name):
    conn = pymysql.connect(host="localhost",user="root",password="123456",database="game",charset='utf8')
    sql="select * from user_info where name='%s';" % name
    cursor1 = conn.cursor()
    cursor1.execute(sql)
    data = cursor1.fetchone()
    if data:
        data2 = 'select name from user_signin where name="%s";' % name
        count = conn.cursor().execute(data2)
        member = data[7]
        if member == 0:
            member = '暂未开通会员'
        elif member < time.time():
            member = '会员已过期'
        else:
            member = '剩余' + str(int((member - time.time()) / 86400)) + '天'

        data3 = 'select date from user_game where name="%s"' % name
        cursor1.execute(data3)
        times1 = cursor1.fetchone()[0]
        times2 = cursor1.fetchone()[0]
        times3 = cursor1.fetchone()[0]
        l3d = Data(name)
        winrate1,winrate2,winrate3 = l3d._winrate()
        signin = l3d._signin()
        script_list=winrate1.get_js_dependencies()
        script_list+=winrate2.get_js_dependencies()
        script_list+=winrate3.get_js_dependencies()
        script_list+=signin.get_js_dependencies()
        prop1=data[4]
        prop2=data[5]
        prop3=data[6]
        if max(prop1,prop2,prop3)<10:
            prop1=data[4]
            prop2=data[5]
            prop3=data[6]
        elif 10<=max(prop1,prop2,prop3)<100:
            prop1='%02d' % data[4]
            prop2='%02d' % data[5]
            prop3='%02d' % data[6]
        elif 100<=max(prop1,prop2,prop3)<1000:
            prop1='%03d' % data[4]
            prop2='%03d' % data[5]
            prop3='%03d' % data[6]
        context = dict(
            name=name,
            point=data[3],
            member=member,
            signin=count,
            times1 =times1,
            times2 =times2,
            times3 =times3,
            prop1=prop1,
            prop2=prop2,
            prop3=prop3,
            myechart1=winrate1.render_embed(),
            myechart2=winrate2.render_embed(),
            myechart3=winrate3.render_embed(),
            myechart4=signin.render_embed(),
            host='/static/js',
            script_list=script_list
        )
        return render(request,"_index.html",context)
    else:
        return render(request,'_error.html')

def rank_views(request,name):
    name = name
    l3d = Data(name)
    point_rate = l3d._point()
    winrate_all = l3d._winrate_all()
    script_list=point_rate.get_js_dependencies()
    script_list.append(winrate_all.get_js_dependencies())
    context = dict(
        name=name,
        myechart1=point_rate.render_embed(),
        host='/static/js',
        script_list=script_list,
        myechart2=winrate_all.render_embed(),
    )
    return render(request,'_rank.html',context)

def info_views(request,name):
    name = name
    l3d = Data(name)
    _map = l3d._map()
    _prop = l3d._prop()
    _signin_all = l3d._signin_all()
    _click = l3d._click()
    script_list=_map.get_js_dependencies()
    script_list.append(_prop.get_js_dependencies())
    script_list.append(_signin_all.get_js_dependencies())
    script_list.append(_click.get_js_dependencies())
    context = dict(
        name=name,
        myechart1=_map.render_embed(),
        host='/static/js',
        script_list=script_list,
        myechart2=_prop.render_embed(),
        myechart3=_signin_all.render_embed(),
        myechart4=_click.render_embed(),
    )
    return render(request,'_info.html',context)

def back_views(request):
    return HttpResponseRedirect('/')

def error_views(request):
    return render(request,'_error.html')