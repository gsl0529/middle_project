(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('苍溪县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510824","properties":{"name":"苍溪县","cp":[105.934756,31.731709],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@ADD@@@AC"],["@@H@FBB@DDBADBB@B@@ADA@@BC@@D@BABAB@B@D@BAD@@ABABBBADAD@AAAAAAEICAAA@@@C@IAA@@@@@EACAA@AA@ABCBCDE@@BBBBBBB@@@@@B@@@BBF@B@B@B@@D@F@B@B@A@@@ABAB@@@@@B@@@@@B@B@B@@AB@BA@A@@@A@@BCB@@@@@BA@A@AAA@@@AA@@BAACEBADABCBCBADCD"],["@@AA@ABC@ADABA@CBA@@DAB@DA@@@AAAC@A@CACACAAAC@A@C@ABAA@ABC@CAA@AAA@AAAA@CBABABA@AB@B@B@F@BA@ABA@CAA@A@A@@@AB@BB@BD@B@B@BC@CBC@A@AD@B@D@B@B@BA@A@E@A@A@@@@B@BHBBBBBABABC@CB@BA@@B@BB@BBB@DA@AB@B@B@BB@BBB@BA@ABA@ABCD@B@DBBBBDBDBB@@@@BAB@BA@A@C@@@AAAAAAA@AAC@ABA@ABAB@BABC@A@C@CACAA@A@C@@BA@@BABAB@B@D@B@BBB@@@BA@A@A@A@AAABCB@D@BAD@@@BA@@BCBABCBEDADADA@@BABAH@BADADA@@@GBA@I@C@CB@@BDDB@B@B@BADABEJGDAD@B@H@H@B@@@BA@ABCACCCAA@CAAAAAACCCCIAAA@C@C@CBCBCBABABA@CDA@A@CBA@A@@DAB@B@@@D@B@B@BFBDBD@BAFDDBHDJFLHH@L@FD@DALAJ@@@DDDRDFFAJIFABADKJEHABCF@JAJALAJ@BAHDJBFBD@@DBFGDADAJDLBHDFBDBBFCFADEHAB@BDFDDJDB@DDBD@D@BADABEFABBBBDBDFF@DFDFBBDAF@B@DBFDDBDAFFBLHD@@BB@@BDFDFDBDD@F@DABABCD@DCDEDGHEDCF@BAD@HD@DBJFF@B@HAFAB@@AJCFEDGFABBF@DAB@D@DD@BADA@BBDDBB@D@BABGFIJCFCJAJAD@DBDBDB@DD@@FDBBB@DADAAEBEBAD@BBDBBDFF@F@BBFBFDDDDDH@FCDC@@BADABBD@A@@@@B@BD@@B@B@@B@@A@A@@@@@AA@@@@@@@AA@C@AB@B@@@@B@BC@@@B@@@@CD@@B@BBBB@B@@A@@BB@@D@@A@AA@@A@@@@@ABBD@@@B@@A@@A@@A@BBBB@@@@BA@@@BB@@@@B@@@B@@B@@@@ABA@@@@DA@@@A@AB@DC@@FCH@B@BBB@BAD@BB@B@@BB@@@@@AB@@@B@@@B@DAB@D@F@H@H@J@FBF@BF@DBHDDD@FBF@BA@AAAEEAC@ABAF@B@FDHDD@D@BCBC@CAAEAAA@CDIFIDEHAFAJC@@J@DCBCDADCBBD@DFDDDDHBABCBA@A@AH@HA@EFEBMHE@C@E@CHADAJDDBDBBBDD@HEDCBABABAB@BABA@A@A@CBA@@@AB@B@BA@@DBBBB@B@JEDBB@BA@@BBBDADBJDDHDBB@D@D@FDBJBDDBBDDHJBDBD@D@JDDBD@JBBBB@BCBEBC@IDAB@B@@BBBBH@HBHBHDDFBF@B@@B@B@@DDFBDBBBB@F@BB@B@@B@BCBAB@B@@@@AB@@B@@B@ABA@@BABCB@@@D@D@@@BBB@@@DB@@B@B@DABAB@BB@BBAB@DDDBHD@@D@@@B@@B@@BB@@CFFBB@BBB@ADAB@@@BAB@BB@D@BBB@@DAB@B@@@BAB@@C@@@BB@BFHDB@BB@AB@@B@B@BB@@B@@A@@@@@AB@BAB@D@BBDB@B@BDBB@BB@@B@BBB@DADADAD@@@FBD@BDDDBBD@B@B@B@DBB@BADAB@DDB@FBB@BC@@B@@B@BBBB@@@B@F@@BDADGBGFI@EBEBE@ELCL@BBH@TDHBHFJHHFD@FADBB@DBBABAB@BA@B@@BDD@@@@@@@HAF@DAFEFC@C@C@C@@AA@@@E@ADG@CB@LDH@B@D@DADAFABAFCB@BAB@D@B@B@@BBDBD@BDBB@B@FAD@B@DBDB@BB@BAB@BCBABAB@B@B@B@B@B@DBHDDDDBFD@@LDFDFBD@BBDB@@@BDFBDBDBBD@DBD@B@F@JBDBD@FBDB@B@B@@AB@DAB@B@@BBB@D@LAF@DBB@FJFJ@BB@P@P@B@JBH@BABA@@BA@A@AAA@@AAC@A@AA@@@AB@BABADAH@DBD@FBDBF@F@FABAB@FIDE@CBEB@BABC@CBEBADCB@DGBC@CDCFEBAD@DAD@DAF@D@DCBAAA@ACCKIAAACAAB@@CBABEBC@C@EDCDG@AD@D@BB@D@F@BB@B@D@NFDBBAD@DE@A@AACEEACAA@C@ABABE@ABC@A@ABC@@BAB@D@B@B@BA@@@@@A@@@AA@AAC@@@AAAAACAAAA@C@C@ABGBABEBABA@AB@@CA@AE@ABABAB@BABAB@@E@CAAAAAC@A@CBC@@BAB@D@@ABA@A@A@A@AAAA@@A@ABADCBA@CBABCBA@A@AAEAAC@CB@AA@CEC@A@AAEBC@ABCBABC@A@CA@ABCHIFEFEHGFG@@DGDM@CAECAA@E@CDADABE@EACACCACEIEECA@@C@CBABAAAB@BC@ABC@A@A@ABABC@@@AD@@CB@BA@A@CAABCCA@EAG@DCBCDADABABCFA@ACA@@@A@@@@@A@@@@@@@BA@AAB@A@AAAA@EBABAFGBAD@BA@AF@DCDABAB@CAAACAAACAI@C@CAAA@A@A@ABCBABAB@D@F@B@D@B@D@BABC@A@AAAEECAICGCCEAC@A@A@ADG@EBC@CAAAEAE@AB@@A@A@C@@@C@CBADIBABA@@DCDABA@AACECEGAECC@AAA@ABCAEBEACCAA@GCC@C@@BAA@BA@AA@@CACAEACAABCDCBAD@@@B@BBBBB@D@B@D@@AB@D@BABADADBB@BABABABABABA@ABCAAAAAC@EBCB@B@FADBB@BBD@@BD@B@BABABC@CBA@EBC@AAC@AACAA@A@A@ABC@@@ABC@@@@@A@@AA@@A@@@@A@@@@A@@@A@@@A@@@A@@A@@A@A@@@@@@@A@@@@BA@@@@@@@AAA@@AAAAA@@A@@AA@@@A@@@@@A@A@@A@AA@@AA@@@@AA@@@@A@@@AAA@@AA@@@A@@@A@@@A@A@A@A@ABA@@@A@A@@AAA@@A@@@AA@AA@AA@@@@@AA@@AA@@AA@@@AEAA@@@@@ABA@@@AAAA@A@A@@BA@@BA@@AA@@A@AAA@@AAABCBADADABAB@BC@C@AAEACAE@AAA@AADABC@C@C@ABAAABA@ABC@C@AA@@A@A@AAA@A@A@AAA@A@A@A@A@@A@AAA@AC@AA@@ABA@A@@AA@@@@A@@@@@A@AAA@@@@@A@@@@@ABAB@B@@A@@@A@@B@@@BA@A@@@A@@B@@AB@@@B@@A@@@A@@B@@A@@@@@A@C@CCCA@C@A@AAAAAC@C@ABCDCBC@C@C@C@EAAAAACACCAAAAC@A@ABABABAJABEB@@CBCBA@CBCDABCJAH@D@B@DAD@@BD@BBBDBBDDD@BBH@H@BABA@ABA@C@C@A@A@C@AACAAACACACAA@AAC@A@EBC@AAEAECAAA@AAAAAA@ACA@@@BABA@A@@B@@BBBBAB@BA@EBA@GCA@CAC@@BA@@BAB@BAB@B@BALCFABAD@DDB@B@BABA@@@AAAA@@AA@@AA@A@A@@@KACCAAACA@CAC@@AEDG@AAAAAC@CABC@AACAEAC@@ACACB@D@B@BA@@BABBD@BBDBBB@@@A@@@AAACA@A@@D@BAA@@AAA@A@@BABAB@@@DC@ABA@@AC@ABCBC@ABCAA@@A@AAAA@@AAC@EACACACAAAAA@AAC@A@@@A@AEE@A@ADE@CAAA@A@C@A@A@A@A@@A@@@@@CBABC@A@AAACECAUOIGAAECEAMCAC@@@ADAHCFADABAD@BA@A@AAAAAA@CAA@C@C@A@C@C@A@E@EBEBG@A@C@C@AAACCEACC@C@C@CACACACAABA@C@AA]EA@C@ABAAEACE@EAAA@CAE@CAC@@AAABABCBEAA@AABCBABA@A@ABAAA@CA@CAAAAA@C@C@C@A@ABABABCJ@BA@ABA@ABC@CAICCCCAEAGCGAE@G@GBE@C@AAAEAC@CBABAFAFCDE@A@CAAACCCIICA@C@C@E@AAAEAI@KFEDGFCDCFCHAFCFEBC@A@CA@C@C@AC@A@AA"]],"encodeOffsets":[[[108404,32773]],[[108956,32706]],[[108419,32402]]]}}],"UTF8Encoding":true});}));