(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('息县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411528","properties":{"name":"息县","cp":[114.740456,32.342792],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@AAA@A@@@A@A@@BAB@@A@@@AAA@@@@@@@@@@A@@A@@AA@@@@@CBA@@@@@@AB@@@@AA@AA@@@@A@A@@@A@@A@@@A@@@@A@@@@BA@@@A@C@A@@@ABABA@@@@@@@@A@@@@AA@@A@@@A@@@ABAA@@A@@@A@@@A@A@@BEBABADA@@BA@IDA@@B@@AB@BA@@@ABA@G@A@A@@@@BA@@B@@A@@@@@A@@@ABA@@@@@ABABABABADA@@BA@@@@A@@A@@@@BA@@@A@A@A@AB@@AB@@@B@D@@@BB@@@D@@@@BB@AD@@@@ABA@@B@@@BA@A@@A@@C@@C@@@@@AEB@@AAA@A@@@@@@BAB@BCBAB@BABAD@@CFA@CA@B@B@@@@A@@@@B@@A@A@@@@B@@@@BB@@@@A@@B@@B@@B@@A@A@@DA@ABC@C@@@@A@@@@@@A@@@@@@@@@@@@A@@@A@A@A@@@AA@@@ABA@@@A@@@@@@B@B@AAAA@@@A@@@@@@AB@@A@@A@@B@A@@AA@@@@A@@@@A@@@@A@@@@@@@A@@AA@@@@@@BA@@B@B@@@AA@@A@@A@@@@@A@@B@@@D@@@@A@@@AA@@@@@@@BA@@AC@@@CB@B@B@@@@A@@B@FB@@D@@@@A@C@@BA@@@@AA@@B@@A@@@@@@@C@A@@@@B@@GB@@A@@@C@C@A@E@A@E@G@@@AD@B@B@@@@BD@B@BBB@@@BHDBBB@FBB@B@BBBB@DBDBFBD@@BBBDDBBBDBB@FBB@@@BB@B@B@B@BADAD@BA@ABCBIDABA@A@@@A@AB@B@B@B@BBF@BB@FJ@B@B@D@D@@@BCBCBCBEB@BA@@@@BAB@@@BB@DFBBDBB@DBJD@@B@BBBBBH@DBD@D@H@B@@@BA@@@AACAA@ACAAAACCCAGA@@CAGGCAAAA@G@CAE@A@C@@BA@@BA@@BBD@BBBFDDD@B@H@B@BBB@BFFDBBD@BBB@B@BABAB@BABABABA@ABA@CAC@AAEEECAAC@G@C@A@E@ABEBCBCBCD@@EBABCBABABA@A@@@A@@@A@AAAACEA@AAAACCCCCE@AC@A@A@CB@@CDA@CBABADA@ABCBA@A@A@A@A@@AC@CAA@A@A@ABA@CBCBE@CD@@A@A@ABA@@@@B@@@B@@@BCB@@AB@@C@@B@@D@@BD@ADD@@@BB@@@BD@@@@BB@@@D@@BB@@@@@@AFBABB@@AB@@AD@@BB@@@B@HB@@@@@B@@@DB@@@@BB@@B@@@@BB@BBB@@F@F@@JFAAJAB@BA@@HA@BD@A@@@BDCB@D@@@D@@B@@@DD@@BD@H@B@B@@B@@@@@H@@A@@@AD@@AD@@@BA@A@A@@BB@@@@B@@@BB@@FBD@BB@@@BBDBB@@@@A@AD@@@@BB@@@@@@@D@@A@B@BB@@B@@B@D@@BD@@AB@@@BB@@@@BB@B@@B@D@FBB@@@B@@B@@AB@B@@@B@BAB@B@DBBBB@B@@AB@@CBA@AB@@CDCDABABA@ABA@AAA@ABCBAB@BE@E@EBAAAA@@CB@@A@@@@@@B@B@@BBB@@@@BAB@@A@ABABA@ABA@A@@@A@A@@BAB@@@@A@A@A@A@A@@@AB@@AB@@@B@B@D@BBB@@A@@BCD@@@@A@A@EB@BC@@@A@@B@@@@A@@@AA@@@A@BA@@@A@A@@@@@ABA@C@@@AB@@A@AAA@@@A@@@A@@BAB@B@@@@AB@@@@@D@B@BA@A@@@@B@BAAAB@@@@@B@@@@@@@BBB@@@@@@B@B@@@BBB@B@@B@@@B@D@@@@@B@DB@@D@BD@BA@@D@B@B@BH@@DFD@@B@@@@@F@@@@BDEBA@@B@@@@@BC@A@A@@DA@@DC@@AC@@BBB@@@B@@CA@DA@@BA@A@@DBA@B@@ABA@@BBB@@@BBB@B@@@BF@@B@NDB@DABC@@LC@C@@@@BA@@BBB@B@D@FBD@F@@LB@@B@@B@@@BB@@BB@@BB@T@D@@B@@B@@BB@@AD@@ABA@@H@@@@@D@FBB@B@BA@@ACNAD@D@B@BBADB@BB@BD@D@FA@B@@@BB@F@@A@@B@FBB@@H@@@BB@@D@@@DBD@@@@BA@@D@@@B@@@@B@@D@@AJ@B@LBDBB@@BDB@AD@@@@@F@@C@@B@AEBB@A@AF@@AC@AGB@@DB@AIB@AC@@TD@@@BBB@BB@@@@A@@DBD@@CF@@A@@B@@@B@@@B@HB@ABBRD@@@DB@@DA@CF@BA@@JB@@B@BABB@B@@B@D@FB@@B@@@AJ@ABB@@@B@@DD@B@@@AB@B@@@B@@BAB@@@@B@@BB@@B@B@DDD@B@@@@@@@BC@A@@@@B@DGA@BEBC@@@AAABA@A@I@ABGBE@@BB@@F@@AAA@A@AACB@@@@@@BB@D@BAD@DB@B@@@BB@@H@@FB@B@@@BB@@A@AD@@@DBBBDBB@F@D@@@@@D@B@B@B@@@BAAA@@@@AAAIF@@@ACB@@A@@@CD@@BDA@@DA@@@DDA@C@@JABBBA@BFA@CB@@AF@@AH@@@BF@@BBB@@@@BB@@BB@BB@@BDA@@H@B@B@@@B@@A@@AC@A@CA@@A@A@@@A@@A@@A@@AADDB@@B@@B@@@B@B@BA@@BAF@BA@@BA@@DA@@DA@@B@@@D@@BB@BDA@D@@D@BD@@@@BF@@@DBB@D@DD@B@PA@@BB@@@@DC@@@@B@@@BB@@@@@B@@@@@@@BB@@BBDB@B@@D@@B@BD@@B@B@@@@@@@BB@B@B@@@@AB@@BB@BALAB@B@@@@@BABAB@BA@@B@@A@@B@DIA@DAB@BE@IC@@AHAD@H@@@D@DC@@DBJ@H@F@DH@@BJ@ABD@@@B@@BB@@@HAB@B@@E@@@EHA@CB@@C@@D@D@@HB@B@@@@FA@@B@@@B@DA@BB@B@@@B@@@@@BB@@HA@@BA@@@A@@@@B@@@@@B@@@B@@@@F@@BB@B@@BBABB@@B@@@B@@@@AB@B@B@DC@@D@DAH@F@J@@AB@BBBAB@BA@@BABA@@@@DA@B@ABA@@B@B@@BB@AD@C@L@AB@DCB@@BH@@@D@@AB@B@@@@BDA@BD@@B@@@@@AHG@CB@@@B@L@@@DB@CD@B@D@B@B@@B@@B@@@B@@BDB@BB@@B@D@@@BB@@DB@BBABB@@B@B@@@@DABDB@@DB@@@AB@@BB@F@B@@@B@BAH@D@BAB@DA@AB@BEB@@@@@@@B@@@@BAD@@DB@B@@@BA@@V@@CB@@CF@@CB@BB@CD@@AB@@BB@@CD@BBB@@@@@D@@BB@@@@@@B@@B@BB@BDB@AD@@@@@B@@BB@@B@BFBVJJFB@TAF@@@N@NAH@B@BAB@NEHCB@@@BD@@HABBB@B@@@D@@@@ADAB@@@B@@AB@@@B@DGB@JAD@BDD@BAD@@AACD@@B@AD@@DB@@@@AB@@AD@@AFAA@FA@ADA@C@@BAB@DCFE@AB@DCB@DCDAB@@@@@B@FA@@BD@@BBB@@BABDDB@D@F@@BB@@C@@@@@@AK@E@CA@A@@@@E@@@@A@@@@ABE@@@@@AA@A@ABC@A@A@@B@@@BA@GBA@@B@BA@@@@A@@@@@A@AAA@AA@@AAA@A@A@@BA@@CA@@G@G@C@@@A@IA@@@@AA@AB@AE@@@AB@@CAC@@@@E@@A@@AAG@C@CA@CA@@AC@@AA@@EBCB@J@@A@@@A@@@A@AD@L@F@D@B@B@BAB@B@@@@@@AAC@@B@@@D@B@@@@BB@@ABBB@@@@B@B@@@@B@B@@AD@BB@BB@@@BBDB@@BDB@B@@AB@@CB@@@BA@A@EB@@A@@BA@ADCBEH@@A@CCA@AA@BAAA@@BGA@@A@@@CB@@@@A@AC@@@C@AA@@AAC@@@AC@@C@@A@AAA@@B@BA@AB@@A@@@CA@@@@CEB@A@@C@@D@BCBCBEH@@E@C@AEA@A@@AA@@@@A@ED@CQ@A@@AA@@C@@@A@@@CI@A@AB@D@LCB@D@D@H@H@D@B@@AD@FELGFALC@AB@@@BBB@DBDB@@B@@@@AB@@GBA@@DA@@BA@@BA@ABC@@@AB@@@F@B@@@@A@@@AACAA@@@AB@DC@@B@@AAC@A@@@C@A@A@@@A@ABAB@BAB@D@B@@@BA@@@AAA@@@A@A@@BCDE@@@C@ABA@@DA@A@@@@BC@A@E@@BABK@@@A@@BE@GBC@AAEAQ@M@A@C@E@A@IBC@CBA@EB@FE@AB@@A@@@C@CBC@C@@@AA@@ACA@@@ABA@@BC@A@@@@AC@A@@@C@A@AA@ABE@IAA@CA@@@AAA@@@ABA@CDC@A@A@A@E@AAAACGKCEAAAAAAA@CAC@C@KCCAAA@@@AAABC@G@E@C@KAC@@@CAC@AACACAACEEEIECEAAA@AAC@C@A@E@CBODA@C@KDA@A@C@A@C@@AA@AAACCCAA@AACA@@A@A@@B@@AFAB@DABABABE@C@A@@@A@@ACAAA@CACAA@ECMGCAEAACA@AEAC@@AACIAC@@AAAC@AA@ECAAAAA@ECECA@EAAAA@@@CBCDABGBA@ABA@AAA@A@AA@@AAAEAGACEC@AAAACAA@@@A@@AA@@CA@@A@@A@A@A@@AAAA@@@A@@@@@AB@B@@A@@@AA@@AC@AAC@A@CAA@A@A@CA@@C@A@@A@@A@A@A@@@@A@@DC@@@A@@AA@@C@C@@@@@A@AA@@A@A@@BABCB@@A@@@A@CC@@@@@CAA@C@@AA@AAAA@@@@B@@@BBB@B@@AB@@A@@@A@A@@@@A@@@AA@@@ABAAA@@BC@ABA@A@@@A@BA@@BA@@BA@@AA@@A@A@A@A@@@@A@@@@BA@@@A@@AAAAAA@@@AB@@@B@B@@@@@@A@@A@CA@@@@@A@@@@BA@@@@AA@@A@A@@@@@@A@@@@@AAA@@A@@@@@@A@@@@@@AA@@@AAA@@A@@@@@@A@@@@B@@@@AB@A@@@@@@@A@@A@@@@A@@@A@@AA@@@@@@@A@BB@@A@@@A@@@@@@BA@@A@@@B@@AA@@@@B@@@@A@@@@@@AAAA@@A@@@A@@A@A@@@@AAA@@@CC@@A@@@@@A@@@@@@BB@@BA@@@@@@@@@AA@@@@A@@@@@@AA@@@@AABAA@B@@A@@A@@A@@@A@@@CA@@@A@@A@A@@@@@A@@B@@A@@@@A@@@AA@@@@AA@@A@@A@CB@@A@@A@@AA@C@@CC@@A@@@@@AB@@A@@@AA@@@@@C@C@@@@AA@@@CA@@A@@A@A@@A@@@@A@AA@A@@@@A@@AAA@@@@CA@A@A@@A@A@AA@@"],"encodeOffsets":[[117600,32913]]}}],"UTF8Encoding":true});}));