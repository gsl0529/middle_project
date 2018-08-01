(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东台市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320981","properties":{"name":"东台市","cp":[120.320328,32.868426],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@@AAAAACA@@A@@@@@@AC@@@@A@@@A@@AB@@A@BAA@A@@@@@A@@@A@@C@A@AAA@AACAAAAAC@AEC@A@@@AE@A@M@@B@J@DB@@B@B@BGB@B@B@BA@@@A@@A@@@B@DD@BF@@@@@@@BB@@AB@BAJDAD@@@BA@A@@@AHB@ABD@AF@@@BA@@@@@@@@@@@AD@BE@A@@BCB@BA@@B@BA@@B@@A@@B@@@@CAAB@@A@BADA@@C@A@@CA@@AAB@BA@@@E@A@@@AA@@A@@H@@BBA@@BA@A@@@@@@A@@AA@@A@@AE@@GC@@CCA@A@EEC@JF@@BABGA@E@@A@@CA@@@@BAD@@BB@@@B@@@BBB@BBDBB@@AB@@BBB@@@BD@BBB@@@B@@BBA@@@@B@@@B@@@BB@@B@@@D@@@BA@@@AB@@A@A@@@AB@@@@@@A@@@ABAB@@AB@BA@A@@B@@B@@@B@@BBBB@@@@@@ABBAD@@A@@BB@@@@@@@E@@@@@A@CDABCD@@@@ADABCD@@B@@DG@A@FCCAEAEE@@@AA@@A@AAAA@@@A@@@@@@CC@AA@@@AI@@CO@@@@B@@C@@DECA@@B@@GA@@EA@BA@@BA@@@CAEAC@@@A@@BA@A@@@AAAAAAA@CCA@@@@BABCBA@AB@AABCC@BA@A@@@BBA@A@@BCAA@@@@@E@@CAB@BA@@ACB@ACBCBA@A@AB@@@@@@@AG@@B@@@DC@@@AB@B@B@@@@A@IAG@AA@@A@BA@ABU@A@EA@@@A@@@@@C@@@A@@B@@@@@BC@CB@@@B@@@BC@AB@@@B@@AB@@A@ABE@@@@@A@@BA@@CCBAIC@@BA@AB@@CB@BA@A@@@@@CEA@@B@@@@AB@@@B@@ABA@C@C@@CEBC@C@@@@AE@@@C@@@E@@F@H@BB@BBD@B@@@@BABA@A@@@ABAA@@A@CDBBGH@@@B@@AB@@APAJAHAHAJI@A@A@@BCB@@A@EBE@ADDBB@CFA@CDCA@@@BAB@@@BAB@@A@@BA@@CC@@@@@C@@BA@@A@A@BC@@AA@@B@@A@A@@BE@AA@@@DA@@BA@A@AB@FDVD@@@BD@@CB@@A@@@@BC@A@CBABA@@@A@@@@@@BE@@@@AEBAC@AA@CAA@CC@AQBA@A@@@@BAAC@CAA@AAAA@@AAE@@DA@ABC@@@C@@@A@@@E@C@EAA@AB@A@A@@@@@ABAAAC@BCE@@@AD@@@@EAA@AAA@C@@@ADD@ADA@B@@B@@CDA@CAAAA@AABAAA@@AABA@@AACDABEEAAAAGECAAAAAECAAA@@AC@CAAACACACCA@CAE@E@A@C@ABE@C@A@G@C@C@C@@EC@@AB@AA@AC@@ABA@@@A@@A@@@A@BDEB@A@A@AAB@@@@A@@BA@A@@@@@@BA@@AA@@@C@@B@B@@A@A@@A@@@@BA@A@@CDAFGAA@E@@@DCAACABS@G@@BA@@D@@@AE@@@@@@@AD@B@AC@C@AI@E@BEBG@AAG@C@@C@@@AC@ECB@ADAAACBA@@AAAA@AE@A@A@CAA@AAA@AC@ACD@@AAIB@BABB@A@AD@@A@A@CC@@AA@@B@@A@EDAA@@A@@@@A@ACACBA@ABA@@@@F@B@F@DBBBH@@CB@@@BBDG@A@@D@@C@AB@@ED@@@A@@CB@@@@CJ@@K@C@@C@MMA@AAA@@AD@@@BA@@B@BAFA@A@@CC@@@A@A@@AB@B@@AB@@AAA@@@A@ABAAACB@B@@MAA@@HA@@@AGA@@D@@@@@@A@@C@@IB@@C@@@@A@C@@IAG@@AC@@@@@@AC@@BA@@CG@@A@@G@@BABA@GBABA@@B@HD@AH@@@@@@A@AB@@AD@DC@@B@@HB@DA@DBDC@@NFAB@@@B@@ABBD@B@F@@@@B@@ABB@@@H@@@@@@@BA@@B@BA@@B@B@@C@AB@BDBABBBAB@@@@@B@BAD@BFA@B@@@B@BB@@DDA@@BD@DB@@B@@BDC@A@A@@D@@CACB@FD@@@@@D@@FA@@@A@@B@B@@D@B@D@@B@FB@DA@B@BAD@@B@B@@@@BJB@BADB@DB@@@BE@BFF@@@B@D@@@B@F@@B@DD@B@DB@@BC@@B@@@B@@B@BD@BB@@@@BB@@A@BDH@@BAB@D@@A@@FA@@BB@@DD@B@B@@B@B@@B@FD@@@AB@BB@@BABBB@B@BA@@@DDA@@@B@@B@FBAD@@@@HB@B@H@D@B@B@B@@@BB@@@AD@@AB@@BB@@@B@BF@@B@@D@B@@@B@B@@A@@B@@@BCF@BB@A@A@@BBB@@@BF@@B@@CD@@DF@BDBNBDA@@D@@@@AB@@A@C@BDF@@BB@@DHABFBBBBB@@A@@BBA@BBBAH@B@@@@DA@@DDAF@@@@@B@@DB@@BB@@BA@@BACCBABB@BDB@FABDBBB@B@AA@ABBB@BBCBCBABDB@BA@AAADA@A@A@@B@@@D@@ABAD@@ADAAADA@@B@@A@AA@@@AAA@@C@C@BBABAA@A@@@@ABCA@BA@@@@@@@CA@BCA@AE@AAABABA@CA@@@EE@@A@A@@BA@@BA@AAAA@@@@A@@AABA@@@@A@@@BA@@A@BAA@@@ABA@@ACA@@C@@B@@ABCBA@A@@BA@@BA@@AA@@BA@@@@@A@@@@DAAA@@@A@@AA@@B@B@@@@C@@BC@@@@@A@EB@AA@C@@B@@@@C@B@CB@@@BB@BHBA@DB@BDBABBB@BBB@DD@ABBCDB@BB@@B@@B@@EF@@AB@@@@@B@@@@@B@@AA@@ABG@BFGB@@@B@@@@F@@FB@B@@@D@@B@@@@B@D@@B@@@BFAFA@E@@B@@@B@@@@@@B@@B@@@@@BAD@@AB@@AB@@@D@ABB@@@@@@@BAB@@@AFFBB@@@@BABB@@BD@@D@@@BB@@@A@@B@B@@@BBB@FB@@BCAA@@DE@C@@B@@@D@BCBA@@@FFA@@B@B@@B@@@@BDAB@DADAD@@BB@@@BD@B@F@@@@@@@B@@CB@@@@@@AB@@A@@BD@@BDA@BAB@@@BABFB@@@@B@@B@@B@@AB@@@D@@@@@B@@B@@B@@DB@BA@@@BD@@BDAD@@D@@@B@BC@@@A@@@@@@BA@@FD@@DAB@@@@@@@BA@@@@B@@@@A@@BC@@BB@@BA@A@@@@AA@CBAAA@AAA@ABA@BB@DA@@@@@EBBBA@@BB@A@ABA@@@@@A@A@@FAAA@GA@B@F@BC@@CCAA@A@BB@DB@@DB@@H@@@DB@@@AB@@@@@@AA@@@@@BAB@BBBB@B@B@@D@@@DF@D@@BCA@BA@AD@BA@@B@@@@A@@DB@@@@@@B@BA@@B@BBDC@BB@B@@CB@@BBA@@BAB@@AB@@AD@@@BD@@@@B@B@@@@@BBB@@A@@@@@@B@BA@@@@B@@@@@B@B@@AFB@@@B@@@B@@A@@@D@BJ@F@@D@@@@B@@A@ALAH@B@HAB@@C@@@@@CB@@GF@BBB@@AB@@@B@@@@@@A@@B@B@@@B@@@@@@@@ADAAABABAAAB@ACB@@@@@H@HAB@@@@BFA@@BH@@@D@@@BB@B@@@B@@@@@@BBA@FD@@@F@@FD@AB@@AA@@@B@D@@BC@B@BH@HAF@F@@BF@@A@@LATAD@BB@@D@@AH@B@@@@C@CC@@A@@@C@A@@@@B@@BB@@@D@@@B@@@B@@BBA@BB@@@B@@@@DBDBB@@FAD@@@BADC@@B@@@BD@@B@F@DBF@HBF@F@H@HBB@J@DA@@BBB@FDDDBDFDDBDDB@BBB@DDBB@@@@F@B@BBB@J@JAB@B@D@D@D@F@J@D@D@@@B@LAF@FBB@B@FAB@@@DCB@BAB@B@@A@AEBA@@@@CB@@@F@@@BA@B@@@BBABBDADAB@@C@@@BB@BA@@@@DAB@B@@BB@@@DAFA@@BBB@HAF@B@BBB@D@B@B@@@DADAFAB@B@FBB@D@L@D@D@D@@@B@F@FBHBD@D@DAB@B@BBDBBBD@@BBAB@B@@@@@BABC@@@A@ACCA@CCA@AAAA@@@A@@@@@A@@CAB@@@ND@AD@@BBBB@@BPFFBHBDB@BCAA@@@B@@@@@@@AFBBADDB@@FA@@@BB@@@@ABB@A@@BBB@FBBCNHBBFB@BDBB@@@@@DBHD@BBA@@@@@@@AB@@BB@@@@D@@@@JB@BDBF@@@FD@GD@@AB@@H@@@BA@@@ABDB@CB@@BBB@@DBBC@@BBADB@BCB@@@CFLDHF@@@AB@@A@A@A@AB@@@@C@A@A@@@@@AB@B@DAB@@A@ABA@@BA@A@@@AA@@@@A@@@C@A@@@AAA@@@A@@D@B@@@BCBADABAB@@@@@B@@@@@BA@A@AA@@ABA@ABA@@AA@@@@@AF@@FBB@A@@B@B@@A@@D@BA@@B@@@B@B@@AB@@@@@@@@AB@BA@ABAB@@@B@@A@@BB@@BBB@BB@@@@B@@@B@D@@@D@B@BAB@D@B@BB@@BAB@@AB@BABA@@BAB@@@BABABAB@@@B@BAB@FBB@B@@@@@@A@@B@@@B@BADB@@DAD@@@@@D@@@BB@@@B@@DB@@@BD@BB@@F@@BB@B@@BFDB@DB@A@@@@@@B@@@@D@@H@@JL@@BDBFDBB@@BBB@@@@B@@DBDBN@F@@fB@@@@@@CD@@D@@@@B@X@@TL@H@V@@TzAP@´@BTAF@@ABA@[JfZLJ@@B@rAJ@tVT¹DSAIAEEEECOEDIHaNANGH]COAIDEDAF@PHzBFADK@QOăDYCGEEOCFKIMIIEEECEAI@IHIDG@A@IBIFGHMBEAI@AAE@OAWHgjJzLJ@{QsMGAA@@@GCG@AAC@GC@@Y@@Ai@BWY@@W@@B@JJ@@B@B@HCFBF@@@@@BAB@@@ECCAAB@A@@C@EACAEAC@C@A@CBA@EBC@A@GB@EACHA@AB@@@A@@AA@IAEAA@@@GCKCGAAAAA@@GCACAACA@@@AIC@BAA@@CABAA@@B@@@@@BA@@AAA@B@BA@@A@@@@A@@@A@@A@A@@A@@@@@A@@@A@@@@@@B@BBB@@@TBL@JK@@AA@@@@AE@@DC@@@E@A@@@ABA@@B@BC@AAA@GD@AA@A@@@AAC@@A@@@@BB@AC@@@A@@@@AA@@@AACBC@A@@@I@K@@@AA@@@CAA@@A@A@@E@@BM@@A@@EA@@D@A@@A@ABA@@AA@BAC@@BCA@@C@@NK@@CA@AB@@C@A@@@@D@BB@@@BH@BA@@D@@@@E@@AG@@@@BG@@BB@@DC@@@A@QA@A@@@@A@@@A@@AA@AB@AA@AA@@@@C@@@AAA@A@@@A@AA@@@@@@A@@@@@A@AA@@@@"],"encodeOffsets":[[123580,33380]]}}],"UTF8Encoding":true});}));