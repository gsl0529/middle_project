(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('长垣县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410728","properties":{"name":"长垣县","cp":[114.668936,35.201548],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@@DD@BDBF@D@@A@BFFA@DB@@DD@@DB@@B@B@B@@BA@BJA@@@B@BD@B@@BDA@B@@@BF@@BD@@AD@@@BDB@@DF@@@D@@@@CB@@CB@D@@BDA@@D@@@B@AB@DB@@FD@@AB@@BD@@BB@@DHA@D@B@@H@@DB@@@@HA@@BA@@@A@@B@BD@@BH@@H@@A@@@@BB@AB@@A@A@@BB@@@@@A@@@B@BBD@@@B@@@BBF@@B@BBA@DB@@FB@@BB@@BBD@FBFVA@@@DB@@@DA@@DDF@@@B@@@D@@@@@J@@@@B@@@DD@B@@FF@D@@HD@DA@@B@HBBBBFDB@BLDJBBB@A@@NDB@@@@CB@@C@@D@@@D@@DD@BFF@@@@@FA@@DAFA@@AA@AH@@@@@F@@A@@J@JA@AD@@CB@F@F@@@@@@BHABDBABBBBF@DL@BG@BF@@HA@BDA@B@@@@B@BA@@F@@BB@@AB@@BJB@@@DD@@BCBBB@BB@@FB@@BBBCBBF@B@@@D@@A@@@AB@BB@@BA@@B@B@@@DBDA@@D@D@B@@@BA@@DB@BJB@@D@@DAAAPA@@@A@@B@@@@BBA@BB@@B@@@CB@@@BBB@@D@@@B@DDA@@@B@@BBPBD@B@PAF@D@@AD@@A@C@@D@@AB@@AD@@AD@@@@@B@@AB@@A@@@@D@@B@@@AF@@AB@@B@@J@@B@B@@F@@HD@@AD@DA@BB@@BHAD@@@DDFA@@LA@@@BF@@BBABDD@@AH@B@@D@@D@@@D@@@@FD@@D@BA@@J@BA@BD@@BBD@@@@@DA@@@@@A@@@BB@@AB@@AD@@@B@@@@@B@@@@@@@@BB@@@@@@@BB@@@@B@@@@@BB@@@@@BFA@BB@@@BD@B@@@BBD@@FDB@@@BA@@BFB@DDB@@@BFBABBHABDB@@BB@B@B@@B@B@@DH@@BB@ABBD@BB@@BBBBB@@@@@BAD@@BA@@BF@F@@@HADDB@@@@@BADBB@B@D@@A@@B@BA@@@B@B@@AB@@B@@@F@@@AB@@F@@@D@@@B@@@@@@@@ABA@@F@@@@AHA@@BDC@BBLA@@F@@A@AD@@AD@@@@@JAB@FA@@@@DAB@@@@BJABB@@DA@@B@BABBB@NAD@@AH@@AH@@A@AD@ACABAACKAAFA@@BA@BB@AANC@BB@B@@AFA@BB@AC@@BFB@@@AEB@@CAADC@C@A@@BBB@ACB@AC@@D@AAAAJD@@@@@AJAAA@@DA@@BAD@@BDAB@AID@@C@@BAFA@AF@@AB@@EBCB@@B@BB@@@B@@@B@@@@@BCF@@BBB@@@@REN@@@AYACA@A@A@C@A@C@A@AA@@@@AAA@AAAAA@@ACAAA@ACCA@AAAACCAAAA@@AA@ACA@ACCA@AAAA@AAA@@@AAA@@EGA@@AAAA@@CCAAA@@AAAA@@EG@@AAACAA@@@AAAAC@@@CAA@AAC@AAAAA@CAAE@WEMC@@EC@@AG@ABM@@@K@I@GBKBQ@I@@@G@AAAAACAA@M@U@MAWCMAOCA@KEA@AAGCCAKGIIAAGIACCE@@CEAG@ABC@CJEBARKBAHEJIDCJGFGDEFEFK@A@M@GACKKMGQIMAQEA@QCGECEEIAA@@ACAECGACAAAA@ABABABCDADALCFADAF@B@N@H@B@@@BABCBA@A@C@A@AACACCCA@AACEIC@AGCICECGACA@@UAG@KCECCAECEEA@EC@AAACCIIEBE@IDAB@BA@EBA@EBCBIBA@A@ABA@AB@@AB@@BBBBDD@@A@ABAACCAC@B@AA@EDA@@@A@B@CB@@@@@B@@B@@@D@@@@@DAB@@BD@FFDBCBC@A@@@@@CBC@@B@@A@A@@BA@@@BB@@@@B@@BC@@@C@@@@BA@AE@@AA@@AAA@@@@BC@@F@@@@A@A@@@@@@BA@AAAB@@A@A@C@DJ@@A@A@AB@@B@@BA@A@@@B@@@@D@B@@A@AE@@@B@@@@A@@BBFC@@@CB@@@@CBAB@@C@@@@B@@@B@@AAAB@@AAE@@BA@@@@@@@A@BBA@@@AB@@BBBB@B@@@@BD@@A@AB@@@@@@BB@@BD@@@@ABACAB@@BDA@ACA@BD@@@BA@CBC@@BEDCBCDCBAB@@@@BB@@@BCBABB@BB@BE@CC@@CBBD@@@@CB@ACBC@AB@BA@A@GACBA@@B@@@BBD@@@@A@A@@@@@@B@@@B@@@@@B@@CB@B@B@@ABBB@B@@CBA@@@@B@B@B@B@@BB@@AB@@ABA@@@@@@B@@@@@@@@B@@B@@A@A@CDEBAB@@@B@@BB@@AB@@@@AA@@@BA@@@ABCB@@@B@@AB@@A@ABABA@@@@@@BBBBB@@BB@@GH@BJF@@@@@B@@CB@@BDCDCFCDCD@@ECAA@@@@CBABA@@@EBKD@@@B@B@@@@AB@@@@EB@@@@@D@@@@AB@@@@@B@@A@A@@@@A@@A@A@EBC@E@CB@@A@ABC@AAABAC@@EB@@@AA@A@CB@@ABABKBAB@@GA@BA@@BA@C@ABCB@B@B@D@F@@AB@@CBA@@@CB@ACB@@DF@@BB@@DFABA@ADB@@@@BBBA@AC@BA@ED@@ABAB@@A@@@EB@B@B@@ABA@A@A@ED@@@@@CA@A@@@@@C@@@A@@@E@@@AB@@@@@B@@@B@B@@@@@@@D@@@@EBC@I@A@A@A@AAA@ACA@AA@A@E@@A@AB@@C@AB@BEAEAAAA@CAG@C@C@A@A@@@EB@@@B@B@@CB@BBBA@@@@B@@B@@B@@@B@@@@@@@BBF@@@@@@@BBFC@@B@B@@@@AB@@@BBB@DA@@@@B@@B@B@@BA@@BC@A@@B@BBF@@A@@B@BA@@B@@A@@H"],"encodeOffsets":[[117235,36053]]}}],"UTF8Encoding":true});}));