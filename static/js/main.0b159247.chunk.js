(this["webpackJsonpsimple-quiz-app"]=this["webpackJsonpsimple-quiz-app"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"questions":[{"question":"What is the scientific name of a butterfly?","answers":["Apis","Coleoptera","Formicidae","Rhopalocera"],"correctIndex":3},{"question":"How hot is the surface of the sun?","answers":["1,233 K","5,778 K","12,130 K","101,300 K"],"correctIndex":1},{"question":"Who are the actors in The Internship?","answers":["Ben Stiller, Jonah Hill","Courteney Cox, Matt LeBlanc","Kaley Cuoco, Jim Parsons","Vince Vaughn, Owen Wilson"],"correctIndex":3},{"question":"What is the capital of Spain?","answers":["Berlin","Buenos Aires","Madrid","San Juan"],"correctIndex":2},{"question":"What are the school colors of the University of Texas at Austin?","answers":["Black, Red","Blue, Orange","White, Burnt Orange","White, Old gold, Gold"],"correctIndex":2},{"question":"What is 70 degrees Fahrenheit in Celsius?","answers":["18.8889","20","21.1111","158"],"correctIndex":2},{"question":"When was Mahatma Gandhi born?","answers":["October 2, 1869","December 15, 1872","July 18, 1918","January 15, 1929"],"correctIndex":0},{"question":"How far is the moon from Earth?","answers":["7,918 miles (12,742 km)","86,881 miles (139,822 km)","238,400 miles (384,400 km)","35,980,000 miles (57,910,000 km)"],"correctIndex":2},{"question":"What is 65 times 52?","answers":["117","3120","3380","3520"],"correctIndex":2},{"question":"How tall is Mount Everest?","answers":["6,683 ft (2,037 m)","7,918 ft (2,413 m)","19,341 ft (5,895 m)","29,029 ft (8,847 m)"],"correctIndex":3},{"question":"When did The Avengers come out?","answers":["May 2, 2008","May 4, 2012","May 3, 2013","April 4, 2014"],"correctIndex":1},{"question":"What is 48,879 in hexidecimal?","answers":["0x18C1","0xBEEF","0xDEAD","0x12D591"],"correctIndex":1}]}')},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(0),r=t(1),c=t.n(r),i=t(5),o=t.n(i),a=t(2),u=t(4);t(11);function l(e){return Object(s.jsx)("div",{onClick:function(n){e.getAnswerIndex(e.answerIndex)},className:"answer",children:Object(s.jsx)("p",{children:e.answer})})}t(12);function d(e){function n(n){n===e.question.correctIndex?e.addScore(1):e.addScore(0)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"progress-bar",children:Object(s.jsx)("div",{className:"progress",style:{width:100*e.progress+"%"}})}),Object(s.jsxs)("div",{className:"quiz",children:[Object(s.jsx)("p",{className:"question",children:e.question.question}),Object(s.jsx)("div",{className:"answers",children:e.question.answers.map((function(e,t){return Object(s.jsx)(l,{answer:e,getAnswerIndex:n,answerIndex:t},t)}))})]})]})}t(13);function h(e){var n=e.score>0;return Object(s.jsxs)("div",{className:n?"result success":"result fail",children:[Object(s.jsx)("p",{children:n?"Congratulations!":"Sadly :("}),Object(s.jsxs)("p",{children:["Your score is ",e.score]})]})}t(14);function j(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Confident with your knowledge?"}),Object(s.jsx)("button",{onClick:e.play,children:"Test it now"})]})}var x=function(){var e=Object(r.useState)(!1),n=Object(a.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(0),o=Object(a.a)(i,2),l=o[0],x=o[1],f=Object(r.useState)(0),m=Object(a.a)(f,2),b=m[0],w=m[1],O=u.questions.length;return t?b===O-1?Object(s.jsx)(h,{score:l}):Object(s.jsx)(d,{question:u.questions[b],addScore:function(e){x(l+e),b<O-1&&w(b+1)},progress:b/O}):Object(s.jsx)(j,{play:function(){c(!0)}})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),s(e),r(e),c(e),i(e)}))};t(15);o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),f()}],[[16,1,2]]]);
//# sourceMappingURL=main.0b159247.chunk.js.map