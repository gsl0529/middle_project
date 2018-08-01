(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沭阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"321322","properties":{"name":"沭阳县","cp":[118.804784,34.111022],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@CAA@IG@@HC@CAA@C@C@@@EHAFEV@@KnEN@BCR@@GCIEABEBKJ@DBA@BA@BD@BBA@NB@@BBB@@JABHD@@B@@F@BDCDDA@@B@@B@B@DDA@JD@@J@HA@@@@BE@@B@@@DA@AV@BA@@AA@@BA@@DD@@BA@@BAB@@@@AFAD@@@FABBBEB@BC@@@C@@BEA@@AB@@@@AB@BA@A@@@C@@B@@@AKH@@A@@B@D@F@@@DA@AH@@A@@BE@AB@B@BA@@@@A@AA@ADB@AF@DB@BEBBBBCJLBAHAHD@@@AL@BCAG@C@QEEAGAE@CAABG@EBA@@@@P@F@@AB@@A@BD@@@B@@@BBDDL@DB@@D@@@D@AK@B@A@@HB@@B@B@JD@@@B@@@@F@DBBD@@@@@@BD@B@B@B@@B@@@BD@B@B@@DD@@BL@@AD@RA@DDA@C@@@@DA@F@@BA@C@@D@@@@@D@@A@CDABHJ@@@@F@@F@@@@DBB@@DA@B@@@RBF@@ABA@@@@BDP@FFFDL@B@@@B@BFP@BBBB@@BBF@B@@AB@@FP@@B@@@@D@@GBI@@BEB@@@@@@@D@B@@@@@B@@BBAB@B@B@B@@@@@@@B@@@@ACA@@B@@@@@DA@A@@B@@@@B@@B@@BA@@BHA@BBABBFB@BB@BBFA@@D@@B@@DA@@D@FBBA@@DB@BBB@B@@DA@@BD@@BB@@BB@@DB@D@AFEAC@BF@@@@@B@BB@D@CF@B@BBD@BDJB@FA@CD@@FA@BF@B@@BAB@@@@BB@D@B@BAB@@BA@BB@@@BBA@@@@@@BHDAF@@@@@@@@A@@@@@@@@@@B@B@@B@@@@B@@@@AAAAA@@@@@A@@B@BA@@@@@BF@F@@BB@@BB@@BB@@@@BD@@@LB@AD@@DDB@EB@@A@@@@D@@AJA@D@@D@@AB@B@@DA@@BF@@@D@@BC@@@@BD@@@D@@B@BB@ADB@@DA@@BB@@B@@@FB@@E@@BF@@AE@@B@@@@DBB@@@E@@@F@@@E@@@F@@@B@D@B@DAB@B@@@BA@BBA@@@@@CB@@@B@BA@@B@@A@@BA@A@GB@@@@@@@@A@@B@@AB@@A@@BC@@FF@F@B@F@B@@@@B@@@@BDBAB@@@BF@@B@B@@B@B@@A@@B@B@B@@@DDA@DH@BAD@@@@@FACAJC@BFAB@@AB@B@AAFAAAB@@@@CD@@A@@D@@AA@@@B@@AB@BBB@@CD@@AD@A@B@FA@AN@@DB@B@@DBD@@@A@@BAB@BFB@B@F@@BB@D@@B@@B@BBB@@@BBA@@@BBB@AEABAGF@@AD@@CB@AAB@@@F@@AB@@@B@@C@@@AB@@C@@H@D@BAB@BBB@@ADA@D@@FE@B@BBB@@@C@@@CDA@@B@HAACD@BD@AAEB@@AB@B@DA@BD@@BBA@@B@@@B@@AB@@B@D@@@BF@@AB@@DBA@DB@@@@@DA@B@@@@AB@@@@DAB@LG@ADA@@FC@@A@A@@AB@@AB@AA@A@C@@ABC@CB@CF@@@@E@@BD@@@C@@BAA@@@@A@@AGDB@F@BBA@@@F@@B@AC@@JAAE@@@@D@BBBBB@@@BFBAB@D@B@PAB@@@@B@@@B@BB@@@@BFBB@@B@BB@AB@BBBBB@@B@B@DDBB@BB@B@@B@BAB@@@@DD@@@BBBB@BHB@B@@@@@BBB@@@B@DABDAB@@BBAB@@DFEB@BDH@FE@BFA@@@@DH@AEB@BF@@@DLA@B@@D@B@B@B@@AB@@BBACE@@HBD@DHGBFFB@HFBBB@D@DBLAH@JAJAFAB@B@JBFBB@J@F@D@D@B@T@F@@@F@RB@B@F@BA@@@@D@DB@F@BAF@BCHBB@DB@CB@BCFB@@BB@@B@B@@@@@BABBBBDBBBBBD@@ABADAJIDGBAAG@@BA@@@@@SE@@C@@XA@DE@DLA@BD@FB@FBBFB@BBBB@BDHBFHAB@@BFF@DBBB@FF@@HFFDFDIB@@DFD@@@@D@DBD@F@@@@NBADT@JB@EP@AABA@AFANA@BB@D@@FD@@FALF@FRB@BAB@H@@CXC@J^@\\@@@EU@@kAAG@@@C@@@@DAAE@@@A@@@AA@A@@@CEACACAA@AAG@@AE@CAEAGBEBI@E@E@@@CBIE@@EB@@@FB@ED@@AD@FBBGDD@A@A@K@@B@BBJHB@@@CKAIBC@CBE@ABABA@ABABADA@@BA@@BC@A@C@@@A@EAI@AAAA@E@@EI@@G@@@A@ID@@CF@BB@@@@AA@@@CCOAG@A@@@@AEA@@@@A@A@@HC@@HAHA@@@@B@B@BAF@B@@A@CD@@@B@AC@@BA@ABA@C@@@AA@@AC@@UB@@CFAACD@AC@@@A@AB@@AB@@A@@@A@@@@@EA@@E@@@CB@B@@GB@AG@@@EB@AI@@JAH@FAHA@JTAFBFAD@@@@@@C@@DA@@@GB@HBBEBB@I@@@E@CKAA@@ABEA@AA@CF@@@@AF@@ALA@AB@@ADA@@AC@AC@AEA@@@A@A@@@ACB@@AFA@@B@ACAB@A@A@@HCCEECCECAAAOIEA@@BA@CF@B@HA@CD@@EBDBADEB@DDBB@@FCAABAB@FDBD@@@@BA@@BAB@DAAA@ADA@BBABDF@BAB@DABAB@@@BA@@BC@@@ABA@CBA@AB@FC@@@@@A@@CC@@@@AEA@@@ECA@A@A@@@B@@BB@@@A@@@B@@@EBAAAAHA@@@@AA@ACA@A@@BAB@@AFA@ADC@ADC@@@ABAC@@@D@@CGEAACAA@@AA@@AAEAC@@@AAA@@@AA@AAC@@AACAAAEAA@A@A@AAI@@@CBA@A@A@@@AAC@AAAAA@ACA@AAC@@@ACAGGECEA@AEEEEAA@AA@@@A@G@AAC@@@CAGCEAAAGEAAACA@AAC@AAA@ACAA@@AACACCCAEEECA@@AAA@@@A@ABCAC@@AAAC@ABC@AAAACA@CAA@A@AAAAAA@@C@@BA@C@A@@@AAGAECA@AGA@@AA@A@E@A@A@C@CCCCAA@AAABA@A@A@@CCB@FA@@@@@@DA@AJA@@BG@A@@@@A@CIFA@@D@@C@AAGB@@@B@ACA@CA@ACCAAAAA@AAAA@@A@E@@@CAC@A@AA@@@A@@@@B@DAB@@A@@@@@AA@@@AAC@@@A@@@@A@C@AA@@@A@@@@@ADA@@@@@@AB@A@@@C@A@@A@C@C@ACA@A@AAA@@AACAA@C@@AA@AA@AEEAAEC@AAA@AAA@@@@A@CBA@@AA@AA@@A@ACCB@DAB@@@FBD@@BDEBABIBAAA@@AE@BDAB@BB@@BA@@@A@A@@BA@ABADABGFABABC@A@C@A@AAGEA@A@A@C@ABA@C@@AA@CA@A@@@AAABE@@AA@@AA@@A@A@EBA@A@A@@@@AA@AC@AAA@AA@CAA@A@@@E@@@CBCDA@A@A@AA@@AAACAAEEAAEEGCA@A@AAC@E@A@AACAA@GAA@AAC@ABC@@@A@EDCBCBADA@ABC@A@A@A@A@@B@@@@@B@@B@D@@BF@@D@FC@@D@A@HB@@DBB@@F@BBFBB@BB@BFDBBCFBB@@B@@DA@@D@@@BD@@@A@@BA@@BC@@BB@@BC@@AA@@@@BCBA@A@A@AB@@EF@BCA@F@BA@@@@B@@ADB@@F@@@@A@@@C@ABE@@BA@@BA@AD@@@@C@@F@@@@@DC@@@@@C@@@E@@@@BABB@BNG@@D@@G@@DE@@BB@@B@@@BA@BDD@@BB@@BCBBDBBB@@F@@@D@@BD@@MDA@A@C@IAI@iAA@KC@@@@@C@EA@@A@@@@K@@AA@AABAC@E@MBEABAEAAD@A@@A@@B@@@BA@AAA@ABAD@@A@@@M@A@@B@@@DA@@@C@BCA@@@AB@BC@@DE@@@A@@@@CCB@EO@@HA@@BCAA@@AE@AEAB@CA@@BC@@CE@@BC@@I@AA@@@BHA@@B@@@A@@BFA@@@@BI@@@A@@@@@A@@@A@@@@@@@A@B@ABAC@@AA@@@AC@@A@@ACA@@CA@ACCB@CE@AD@D@@CAAEDA@G@A@@AB@CF@AGACAA@@IBBFA@CBC@@@C@@@C@@@@@@@A@@BA@CBBDA@BDCDB@AB@@A@@B@@@BA@A@A@@@CACHAAIF@DABAA@CAEA@@B@@@A@@A@@@CKCA@@A@@CCGA@AA@AEB@D@@@CA@@DI@@A@A@@@AA@BHA@@CABA@@EC@@@@A@A@@UB@DE@@CMBA@AAA@EA@DA@@C@@@@@DE@"],"encodeOffsets":[[121457,34771]]}}],"UTF8Encoding":true});}));