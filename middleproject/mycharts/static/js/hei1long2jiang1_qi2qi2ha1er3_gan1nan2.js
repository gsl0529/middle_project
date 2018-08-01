(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('甘南县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230225","properties":{"name":"甘南县","cp":[123.507429,47.922405],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GEBEACNS@I@MCYAE@M@@ECA@CAEACAEAEAECEAC@CACAICCAA@C@@@@@A@@@ABA@ABCBABCBABA@ABEBCDABCBABABABABABAB@BAB@BAB@BAB@B@@@BAD@@@BAB@B@BCD@BABAD@BA@AB@B@@AB@@@BA@ABCDA@ABABABABA@ABA@AB@@CB@@A@@@A@@BA@A@@@@B@@@@@@@@A@@@@BA@@@A@@@A@@@A@A@A@A@@@A@@@C@A@A@C@A@ABA@A@A@A@A@@@A@@@AAA@A@A@CBA@@@@@@@A@@@AA@@@@C@A@CA@@A@A@@@@@ABA@@AA@A@E@@@A@A@A@A@@B@@A@@@@@ABA@@@A@A@A@A@A@A@@@C@CA@@A@@@C@A@A@@@@B@@@@@@@BA@@@AAC@A@@@A@A@A@E@@@AAA@A@E@@@A@C@@@C@AAA@C@A@A@A@A@@@E@A@A@AA@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@A@A@C@A@C@C@A@A@A@A@A@C@CAC@@@A@E@A@C@AA@@ABEAA@@@@@A@@@A@A@A@@@@@@@@AA@@@A@A@A@ABA@@@A@@@AA@@@@A@A@A@@@C@EAM@E@KAE@IAC@QAE@EAABEAE@EAI@CA@@@@@C@A@AA@@@A@A@@A@A@C@@A@@A@A@A@@A@CAC@@@A@@BA@@B@B@@AB@@A@@F@B@FCAA@C@C@CAE@@@BA@A@AAA@@A@@B@BADA@@A@C@@@@A@AB@@A@@@AB@@@@A@@@A@A@C@GAE@E@GAC@@ABA@A@A@@@AAAC@BA@A@@BABAB@@A@AACA@A@@C[@BE@IBAB@D@BBD@B@BAB@B@BA@@B@@A@@@ABA@A@@@A@ABA@A@A@AB@@A@@@@@@@A@@BA@A@ABA@@B@@@@@BA@@@A@@@A@A@@B@@A@A@@A@@@@A@@@@@@@@@@@A@@@A@AB@A@A@A@@@BEBA@@A@@@@@@@AB@@@@A@@@@@A@@@@@ABA@@@@@A@@B@@A@@@@@A@@@A@A@@@A@@@@@@@AB@@A@@@A@@BA@@@A@@BA@A@@@A@@@@@@@A@@@@@A@@@A@@@A@@@A@@@A@A@@@A@A@AA@@@@@@@@A@@@A@@@@@@@A@@@@@@@A@@@A@@@@@@@A@A@@@AAA@A@A@A@A@@AA@AA@@C@CAC@C@@@@ABAA@C@AA@DAFA@A@C@A@@@@JAJAJ@BFFBBDDBBA@GF@@@B@F@DC@MBGBG@AAA@C@@@@A@AAC@CGAIAMCAF@@@AA@AAA@@B@@@@@@A@@@@@A@@@AB@@@@AB@@@@@@@@@B@@@@A@@@@@@BA@@@@@AB@@@@@@@B@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@BA@@@@@A@@@@@@@@BA@@@@BA@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@B@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@ABCFADA@@BCBADCFCDABCBABCDABADCB@@A@@B@@@BABCBGDIDEBEB@@A@@@@@@@@@@@A@@@@@A@@@@@A@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@A@@@@AB@@@@@@@@AA@@@B@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@B@@@@@@A@@@@@A@@@@@@@@@@B@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@A@@@@@@@@@AA@@@@@@A@@@@@@@@@@A@@@@A@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@@A@@@@A@@@@@A@@@@@@@A@@@@AA@A@@@@@@@A@@@@@@B@@@@@@@@@@A@@@@@@@@@A@@@@@@BA@@@@@AA@@A@@@@@A@AAA@@CAAACCAA@AAA@@@C@@AA@@@A@@@@@@@@@@@EFEFGFAB@B@DABCBABABMJUJ@BBJDPJBTFVHTF`LTHRFPFBB^LFDFBBBBBDBBBBBD@BBDBB@DBBBDBB@BBDBB@@@BBFBJD@BD@DBB@DBD@D@B@D@DBBBB@B@BBDBB@DBDBB@DBB@DBBBD@BBD@HDJBLDFBB@JBF@DBB@DBD@BBDBD@BBD@BBD@DBB@DBD@B@DBD@BBD@DBB@DBD@BBD@DBB@DBD@B@DBD@BBD@DBB@DBBBD@BBDBBBBBBBD@BBBBBBBBBBBBBBBBBBBBBBBBBBB@BBBBBBBBBBBB@BBBBBBBBBBBDBBBBBBBBBBBBBDBBBBBBBBBBB@BBBBB@@DB@BBBBBBBBBBBBBBBBBBDBBBB@BBBBBBBBBBBBB@@BB@BBBBBBBBDBB@BBBBBBBBB@BBBBBBB@DBBBBBBBB@BBBBB@BBDBB@BBBBB@B@@BB@DBBBB@BBB@B@DBB@BBBHPBDDFFHFHDHHPDHBD@FDJBBJLFF@@@@@@FDLDHDDBH@BBBBBBDBB@DAD@D@B@D@DBD@D@B@DBD@D@BBD@D@DBB@DBD@BBD@DBB@DBB@DBDBB@DBBBD@BBDBB@DBD@BBD@DBB@DBD@BBD@DBB@DB@@D@BBD@BBD@DBB@DBD@BBD@DBBBD@BBD@B@@@BBB@DBH@BBD@DBB@DBD@B@DBD@BBD@DBD@B@DBD@BBD@BBDBB@B@BBB@DBFBD@BBB@TDDBB@BBPDLBNDNDDBTFNDTJHD@BhVNHBBB@@BB@BBBBJHLJNLLHLJJJDBPPDBBD@@BBZXFDRTDBZVB@FFTPFDDBDDDDBBDBDB@BB@@BFBBDB@FDLRDFDDFH@@BBDB@BHFDBBDBBFD@@FFHJBBFJHF@@JFB@DBBBDBB@DDLFBBB@FDHDTLDBNJFDLJB@@@FDHHHF@@VP@@B@@@B@B@@B@@B@@B@@B@BBBBB@DDDBDDB@@@BB@@B@@@BBDBBBDBBBDBDBBB@@DB@@BBB@@@FDFD@@BBDDLJB@BBBDBBBBB@@@@BDB@@BB@@DDDB@BDB@BBBB@DDB@BBBB@BB@FHB@FB@@D@@@BBHBJHRNBBDDDBBBBBDBDD@@@@FD@@DDHDBBFFB@@@DDJJFDBB@@DD@@FD@@B@DDDDFDBBBBB@DD@@JHBBHFJHLHDDNHJH@BFBBBBB@@BB@@@@BBB@@BB@@@DDFDFDBBB@BBB@@B@@FBDBBBDBDDFB@BDB@@BBDBDBDDDBBBBBHFB@BBBBB@DDBBDDDB@BB@DDBBBB@@B@@BB@DDDBBBB@@BB@B@BBDBDBDBB@B@DBDBD@DB@@DB@@DBB@BBB@BB@@DB@@DBDBDBBBD@B@BBB@@BB@DBBB@@DBFBDDB@DBB@@B@@B@@@B@BBBBB@BBFDDBDBJFDBFDDBBBDBB@@@BBDBDBDDFDFBBBB@BBBBFBJF@@B@BBB@BBB@@@FDDBBBDB@@FB@BB@B@LFHDHFBBB@NFFFDBD@BBDBFD@@@@@@B@BBBBHFBBJH@BB@DDBB@@@@BB@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@B@@@B@@@@@BAB@D@FCLGHGDAJAFA@@HAHAD@FEBCBC@CDCDCDADCBC@AACAAAC@AA@@CECEC@C@ADCJ@FABCBCACAAAACAG@EAA@AA@CBE@E@@BA@A@AAA@@@@@CAA@@BEDAHAF@B@BA@A@A@A@ABE@A@A@A@ADALCJEDADE@AACAACCAEBABE@CAAA@CBCBEBC@C@CAACACAAAA@A@ABADADABA@@BE@AEAAACAEAC@@AAABABADCDAB@D@BBD@B@D@B@BADE@ABA@@BA@@@A@A@AAA@@A@A@A@@@AAA@@@B@@A@@B@B@B@@BB@B@BADAB@B@BAB@@AA@AAAA@BCB@@A@A@CACAAACA@A@A@A@AA@@@A@@@ABA@@@A@@A@AD@BA@A@@AAA@BABADCBCDABAD@BA@A@A@AAAEAEAAA@A@A@ABABAFADABA@A@A@A@ABABABAB@BADABCD@@ADBB@B@@@D@@BB@B@B@@AB@@ABA@AAC@@@A@@AAA@A@AAA@AAAA@@BC@ABAFCFAF@D@D@B@DA@A@AAAACAAAC@CBCBCBADADADAD@@C@ACACAC@@@@AACAA@C@@BAB@B@B@B@BBBB@B@BB@BBBBB@BABA@AACAAAABABAD@FADADCBA@@DAFAFABADAB@@@B@B@B@@@B@@@@CB@@@B@B@B@@@DADCB@@A@AB@B@BAB@@AAAAAA@C@@AAA@ABAB@BAB@@A@A@@@A@AA@@ABABABAB@D@BBD@BAB@@A@ACCAA@ABAB@B@B@BBBDBBBBB@B@B@BABA@AAA@ABA@A@AA@CC@@@A@AB@B@BBB@B@D@@AB@@A@@AA@A@ABAB@@@@A@@AAC@A@AA@@@AB@BAD@BA@@@A@AAAA@@@A@E@E@CBAAC@AA@AAABABADABADA@@@A@A@AA@CAA@AA@@AA@@BA@@@AB@@@@AB@@@AA@A@@@A@@BAB@BAB@B@@A@@@A@@@AA@@@AACBA@A@CA@@@@A@@A@@BA@@@A@@@@AAA@A@@A@@@@@ABAB@B@BAB@BB@@BB@@@B@@@BB@@@B@@@B@@@BAA@@@@@A@@@AA@@@AB@@ADA@@BAAA@@AAAA@ABABA@@D@DBB@B@BA@ABA@@BAB@@@BBB@B@B@B@@AB@@AB@BAB@BABBB@B@BDBD@@B@BBD@@@B@B@BAB@@AAAAA@A@ABAB@BAB@B@B@@BB@@@DBB@B@@B@@BBA@AB@@@@BBA@@@@@@BD@BB@AB@BAB@B@B@@@AA@@@A@@@AAAA@@A@@@@BAB@B@BBBBB@B@BADAB@@CBABA@C@A@AAAAACAAAE@C@CACAACAA@CBABC@EBCBADADABAD@BA@A@C@A@AACAAAAA@AAC@GAKAIAEAAAC@C@G@C@C@C@CAAAA@AA@A@C@ABADAFEDAB@@A@AAAAA@ACAA@CAA@G@CAA@AAAC@@@C@C@CACACACACCCECGAGEKCECECGEECEAEAEACAAAAC@A@AFEBC@EACEMEGCECCECCC@E@C@A@ABA@AFAJABA@ABAACACAAEAG@I@CAA@C@AACAECAC@C@EACAAACAAC@A@CBGBCBABC@EAEAAAAA@ABCBAHCHCDADC@@BC@EAAKCIAGAEAGCCCAA@A@A@AD@F@FALAFABADA@A@A@AAACAAAC@A@CAE@C@@@A@@AA@AAA@C@A@ABC@ABA@@@A@@A@@@A@@@@@@B@B@@A@@@A@@B@@A@@BADABA@C@AAA@ACAC@EAC@C@C@GDEBC@A@C@AAAAAA@CAEAG@GACACACBCBADADAHAFAFADCFCDCBCBC@CAAACEECCAC@C@CBCDAH@JABCFADCBEBE@C@CAECCAAEBC@E@GAA@C@C@A@C@ABA@A@ABAB@@A@@B@B@@@@AF@@@D@@@BB@C@CBC@E@E@C@C@C@ABA@A@C@C@A@A@@@A@@@@@@@@AAA@@@@A@@@A@A@C@A@E@AB@AA@@@AAAA@@AA@@AAA@@A@@A@@@@AAA@@A@@AA@AA@ACAAA@@AA@@AAAA@@@@AA@@@@AA@@A@@A@@AAAAA@@@@@@AA@@AA@@AA@@@AAAAAAAA@@A@@AAAA@AAAA@AAAA@@AA@@A@@A@@A@@AA@@AA@@AA@@@@AA@@AA@@CCCCEEAAAAAACEEEEECEECACEC@@@@A@@@C@@@E@A@AAC@A@A@A@A@@@A@@@A@E@E@A@GAE@A@A@@@A@@B@@C@CAA@@BA@AB@BAB@BAB@B@BA@@BA@@@GBIBGDC@A@E@G@EAG@G@E@EAA@AD@DAD@DAD@BAD@B@BAD@BAB@B@@@BA@C@E@C@E@A@C@C@A@C@E@C@C@E@C@C@C@E@C@C@C@C@E@C@C@C@@A@@BA@CBEBC@CBE@CBC@ABE@ABC@C@@AAA@A@CAC@KCKCIAIAEACA@@A@EAAAA@C@AAA@EAC@CAC@CAA@ABABEBCDABEBA@@BA@EDABEDABIDCDABA@A@EACAGACACAAAC@@@CACAC@CACACAC@CAAAEAGACACACAEAC@ECGACAA@GCEAEAEAEAEAEACACACAE@GCGACACAGCEAC@CAEAGCdOTIKI@CIETYZWiMcngVKPGDGACACACAA@A@AAA@A@CBA@A@C@@@C@CAA@A@C@CAA@@@A@CB@@A@@@CAA@A@A@A@AAC@C@AAC@A@A@AAA@A@A@A@AAA@AAA@CAICIEE@IEGACACACAAA@@@A@@BABA@@BA@@BA@@@A@A@AAAEECEACCECCCCACCECECCCECCAA@@A@GFEBCBIAE@C@QCM@GJVFHBDDA@E@E@G@GAC@C@C@CAC@AL@HPZIRGHEJQIJK]YDeC@G@E@EAE@E@C@CAI@C@C@CA@@@C@EK@AC@K@"],"encodeOffsets":[[126463,48819]]}}],"UTF8Encoding":true});}));