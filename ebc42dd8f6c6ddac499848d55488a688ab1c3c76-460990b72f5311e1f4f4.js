"use strict";(self.webpackChunk_36_dot_22=self.webpackChunk_36_dot_22||[]).push([[875],{9572:function(t,e,i){i.d(e,{Z:function(){return E}});var o,s,a,h,n={opacity:{low:10,lowMid:30,mid:50,highMid:75,high:90,full:100},black:{h:191,s:28,b:24,rr:43,gg:57,bb:60,hh:191,ss:17,ll:20,hex:"'#2b393c'"},white:{h:180,s:1,b:95,a:100},red:{h:12,s:86,b:95,a:100},orange:{h:32,s:85,b:98,a:100},yellow:{h:65,s:76,b:89,a:100},green:{h:121,s:78,b:96,a:100},mint:{h:166,s:94,b:93,a:100},blue:{h:203,s:52,b:93,a:100},violet:{h:280,s:55,b:92,a:100},pink:{h:338,s:22,b:100,a:100,hex:"#ffc8dc"}},r=i.p+"static/letterA-8b80923ddb1fb5df20983a1c2f281632.png",c=i.p+"static/letterA-back-75-f779ffa50d63d96d638ff7028756a2fe.png",d=function(t){var e=t.windowWidth>768?.61*t.windowHeight:.81*t.windowWidth,i=t.createCanvas(e,e);return t.background(t.color(n.black.h,n.black.s,n.black.s)),i},l=function(t){var e=t.windowWidth>768?.61*t.windowHeight:.81*t.windowWidth;t.resizeCanvas(e,e)},u=function(t,e,i,o,s){t.push(),t.fill(t.color(e,i,o,s)),t.noStroke(),t.rect(0,0,t.width,t.height),t.pop()},p=function(t){t.push(),t.colorMode(t.RGB),t.fill(255),t.noStroke(),t.rect(5,5,70,30,2),t.fill(0),t.text("in progress",10,25),t.pop()},f=function(t,e,i){t.push(),t.translate(t.mouseX,t.mouseY),t.fill(e),void 0!==i?(t.stroke(i),t.strokeWeight(2)):t.noStroke(),t.circle(0,0,20),t.text(Math.floor(t.mouseX)+", "+Math.floor(t.mouseY),-25,-30),t.pop()},w=function(t){var e,i=function(){function e(t,e,i,o,s,a){this.id=t,this.x=e,this.y=i,this.speed=s,this.color=a,this.radius=o,this.angle=0,this.dead=!1}var i=e.prototype;return i.run=function(){this.update(),this.display()},i.update=function(){this.x>t.width&&(this.dead=!0),this.dead||(this.x+=this.speed)},i.display=function(){t.push(),t.translate(this.x,this.y),t.rotate(this.angle),t.fill(this.color),t.noStroke(),t.triangle(-this.radius,-this.radius,-this.radius,this.radius,1.5*this.radius,0),t.pop()},i.setAngle=function(t){this.angle=t},i.isDead=function(){return this.dead},e}(),o=[],s=Object.keys(n);s.splice(0,2);var a,h,u=n.opacity;t.preload=function(){a=t.loadImage(r),h=t.loadImage(c)},t.setup=function(){d(t),e={x:t.width/2,y:t.height/2},t.ellipseMode(t.RADIUS),t.colorMode(t.HSB,360,100,100,100),t.frameRate(33),t.noCursor()},t.draw=function(){t.image(h,0,0,t.width,t.height);var i=s[Math.floor(t.random(5,8))],r=t.atan2(t.mouseY-e.x,t.mouseX-e.x);p(n[i]);for(var c=o.length-1;c>0;c--)void 0!==o[c]&&(t.push(),t.translate(e.x,e.y),t.rotate(r),o[c].run(),t.pop(),o[c].isDead()&&o.splice(c,1));t.image(a,0,0,t.width,t.height),t.push(),t.fill(0,u.low),t.circle(t.mouseX,t.mouseY,15),t.pop()};var p=function(s){var a=o.length,h=-e.x,n=t.random(-e.y,e.y),r=t.random(1,8),c=t.random(1,20),d=t.color(s.h,s.s,s.b,u.full);o.push(new i(a,h,n,r,c,d))};t.windowResized=function(){l(t)}},b=i.p+"static/letterB-positive-dbb16f81f378805a55963cd2f4bd07c8.jpg",g=i.p+"static/letterB-negative-99c3dd08a2bf9c993aacfdee764209ca.jpg",m=function(t){d(t),Object.keys(n).splice(0,1);var e,i,o,s,a,h=n.opacity,r=n.black,c=n.white,p=0;t.preload=function(){s=t.loadImage(b),a=t.loadImage(g)},t.setup=function(){o=d(t),t.colorMode(t.HSB,360,100,100,100),e=t.color(c.h,c.s,c.b,c.a),i=t.color(r.h,r.s,r.b,r.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i)},t.draw=function(){var i=p%2?s:a;t.image(i,0,0,t.width,t.height),t.push(),t.translate(t.mouseX,t.mouseY),t.fill(e),t.noStroke(),t.circle(0,0,20),t.pop(),u(t,r.h,r.s,r.b,h.low),o.mousePressed((function(){p++}))},t.windowResized=function(){l(t)}},y=i.p+"static/cFull-e584cfff67bde21df731e396e68c37c8.png",k=i.p+"static/cBlue-baa92e3bb0db765f8fa60c7cd21de9bd.png",v=i.p+"static/cWhite-ca027cb604564ea1950c885ce7c4c6ab.png",I=i.p+"static/cYellow-ead6f5b7fa4bff9881ce9e606c7b50f6.png",M=function(t){d(t),Object.keys(n).splice(0,1);var e,i,o,s,a,h,r,c,p,f,w,b=n.opacity,g=n.mint,m=n.white,M=0;t.preload=function(){s=t.loadImage(y),a=t.loadImage(k),h=t.loadImage(v),r=t.loadImage(I)},t.setup=function(){o=d(t),t.colorMode(t.HSB,360,100,100,100),i=t.color(m.h,m.s,m.b,b.low),e=t.color(g.h,g.s,g.b,b.low),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i),t.noStroke()};var x=.19*t.height,R=.35*t.height,S=.8*t.width,C=.4*t.width;t.draw=function(){switch(M%4){default:case 3:c=a;break;case 2:c=r;break;case 1:c=s;break;case 0:c=h}w=3*t.frameCount%540,e=t.color((g.h+1.5*t.frameCount)%360,g.s,g.b,b.low),w<90?(p=S-w/90*C,f=R):w<180?(p=S-C+x*Math.cos(-2*(w-90)*Math.PI/180-Math.PI/2),f=R+x+x*Math.sin(2*w*Math.PI/180+Math.PI/2)):w<270?(p=S-C+(w-180)/90*C,f=R+2*x):w<360?(p=S-(w-270)/90*C,f=R+2*x):w<450?(p=S-C+x*Math.cos(-2*(w-90)*Math.PI/180+Math.PI/2),f=R+x+x*Math.sin(2*w*Math.PI/180+Math.PI/2)):(p=S-C+(w-450)/90*C,f=R),t.push(),t.fill(e),t.push(),t.translate(p,f),t.circle(0,0,150),t.pop(),t.push(),t.translate(p,1.05*t.height-f),t.circle(0,0,150),t.pop(),t.pop(),t.image(c,0,0,t.width,t.height),t.image(a,0,0,t.width,t.height),u(t,m.h,m.s,m.b,b.low),o.mousePressed((function(){M++}))},t.windowResized=function(){l(t)}},x=i.p+"static/dStaff-394cd5e9bfb28f08267ade02e6d6a0eb.png",R=i.p+"static/dNote-bf58cdd1bc58c93d9c241b9e0cb4e0e5.png",S=function(t){d(t),Object.keys(n).splice(0,1);var e,i,o,s,a,h=n.opacity,r=n.white,c=1,p=.445*c;t.preload=function(){o=t.loadImage(x),s=t.loadImage(R)},t.setup=function(){i=d(t),t.colorMode(t.HSB,360,100,100,100),e=t.color(r.h,r.s,r.b,r.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(e),a=.4*t.width,p*=a,c*=a},t.draw=function(){t.image(o,0,0,t.width,t.height),t.push(),t.translate(t.mouseX,t.mouseY),t.fill(n.red.h,n.red.b,n.red.b,h.low),t.noStroke(),t.circle(0,0,5),t.pop(),u(t,r.h,r.s,r.b,h.low),i.mousePressed((function(){t.image(s,t.mouseX-p/2,t.mouseY-.85*c,p,c)}))},t.windowResized=function(){l(t),a=.4*t.width,p*=a,c*=a}},C=i.p+"static/letterE-aa7fe99d3f7634bcef67314737f1b114.png",A=function(t){d(t);var e=function(){function e(e,i,o,s,a){this.id=e,this.start=i,this.end=o,this.mid={x:(this.end.x+this.start.x)/2,y:(this.end.y+this.start.y)/2},this.x=this.mid.x,this.y=this.mid.y,this.offset=s,this.vertical=a,a?(this.w=25,this.h=t.dist(this.end.x,this.end.y,this.start.x,this.start.y)):(this.w=t.dist(this.end.x,this.end.y,this.start.x,this.start.y),this.h=15)}var i=e.prototype;return i.run=function(){this.update(),this.display()},i.update=function(){var e=t.frameCount*t.PI/180;this.vertical?(this.x=this.mid.x+this.w*Math.sin(10*e+this.offset),this.y=this.mid.y+this.h/2*Math.cos(e+this.offset)):(this.x=this.mid.x+this.w/2*Math.cos(e+this.offset),this.y=this.mid.y+this.h*Math.sin(10*e+this.offset))},i.display=function(){t.push(),t.fill(f),t.noStroke(),t.translate(this.x,this.y),t.circle(0,0,4),t.pop()},e}(),i={eA:{x:t.width/5,y:t.height/9},eB:{x:3.9*t.width/5,y:t.height/9},eC:{x:1.1*t.width/5,y:1.05*t.height/2},eD:{x:3.75*t.width/5,y:t.height/2},eE:{x:t.width/4,y:6*t.height/7},eF:{x:4*t.width/5,y:5.9*t.height/7}},s=i.eA,a=i.eB,h=i.eC,r=i.eD,c=i.eE,p=i.eF;Object.keys(n).splice(0,1);var f,w,b=n.opacity,g=n.black,m=n.white;t.preload=function(){o=t.loadImage(C)};var y=[];t.setup=function(){for(var i=0;i<15;i++)y.push(new e("cd"+i,h,r,i*t.TAU/15)),y.push(new e("ab"+i,s,a,t.PI/8+i*t.TAU/15)),y.push(new e("ef"+i,c,p,i*t.TAU/15)),y.push(new e("ae"+i,s,c,i*t.TAU/15,!0));d(t),t.colorMode(t.HSB,360,100,100,100),w=t.color(g.h,g.s,g.b,g.a),f=t.color(m.h,m.s,m.b,m.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(w)},t.draw=function(){u(t,g.h,g.s,g.b,b.low),t.image(o,0,0,t.width,t.height);for(var e=0;e<y.length;e++)y[e].run()};t.windowResized=function(){l(t)}},U=i.p+"static/letterF-8117ec918511a48fb92b18ed59e20cac.png",B=function(t){var e=function(){function e(t,e,i,o,s,a){this.id=t,this.x=e,this.y=i,this.w=o,this.h=s,this.color=a}var i=e.prototype;return i.display=function(){t.push(),t.translate(this.x,this.y),t.blendMode(t.EXCLUSION),t.stroke(this.color),t.strokeWeight(this.w/3),t.line(-this.w/2,-this.h/2,-this.w/2,this.h/2),t.line(this.w/2,-this.h/2,this.w/2,this.h/2),t.push(),t.strokeCap(t.SQUARE),t.line(-this.w/2+this.w/6,0,this.w/2-this.w/6,0),t.pop(),t.pop()},i.isInRange=function(e,i,o){return t.dist(this.x,this.y,e,i)<=o},e}();d(t),Object.keys(n).splice(0,1);var i,o=n.opacity,a=(t.width,t.height,n.black),h=n.green,r=[];t.preload=function(){s=t.loadImage(U)};var c=0;t.setup=function(){d(t),t.colorMode(t.HSB,360,100,100,100),t.color(a.h,a.s,a.b,a.a),i=t.color(h.h,h.s,h.b,h.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i);for(var o=0,s=i,n=0;n<t.width;n+=76){for(var l=0;l<t.height+95;l+=66.5)o=c%2==1?n+19:n,r.push(new e(n+":"+l,o,l,38,95,s)),c++;c=0}},t.draw=function(){u(t,a.h,a.s,a.b,o.high),t.image(s,0,0,t.width,t.height),f(100),p(t)};var f=function(e){t.push();var i=400/(1+.2*t.dist(t.mouseX,t.mouseY,t.pmouseX,t.pmouseY));t.translate(t.mouseX,t.mouseY),t.stroke(a.h,20),t.strokeWeight(2),t.fill(a.h,1),t.circle(0,0,i+38),t.pop()};t.windowResized=function(){l(t)}},P=i.p+"static/letterG-db268aadde7bffc13f208895083a6fd1.png",X=i.p+"static/letterG-bg-c0c5b83a96e3782e8035e902b6c83560.png",D=function(t){d(t),Object.keys(n).splice(0,1);var e,i,o,s,a,h=n.black,r=n.white,c=n.opacity,w=0;t.preload=function(){s=t.loadImage(P),a=t.loadImage(X)},t.setup=function(){o=d(t),t.colorMode(t.HSB,360,100,100,100),e=t.color(r.h,r.s,r.b,r.a),i=t.color(h.h,h.s,h.b,h.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i)},t.draw=function(){var n=w%2?s:a;t.image(n,0,0,t.width,t.height),f(t,e,i),u(t,h.h,h.s,h.b,c.low),o.mousePressed((function(){w++})),p(t)},t.windowResized=function(){l(t)}},Y=i.p+"static/letterH-34e0887707a9d4d511cd01bfd999349b.png",H=function(t){var e=function(){function e(t,e,i,o,s,a){this.id=t,this.x=e,this.y=i,this.w=o,this.h=s,this.color=a}var i=e.prototype;return i.display=function(){t.push(),t.translate(this.x,this.y),t.blendMode(t.EXCLUSION),t.stroke(this.color),t.strokeWeight(this.w/3),t.line(-this.w/2,-this.h/2,-this.w/2,this.h/2),t.line(this.w/2,-this.h/2,this.w/2,this.h/2),t.push(),t.strokeCap(t.SQUARE),t.line(-this.w/2+this.w/6,0,this.w/2-this.w/6,0),t.pop(),t.pop()},i.isInRange=function(e,i,o){return t.dist(this.x,this.y,e,i)<=o},e}();d(t),Object.keys(n).splice(0,1);var i,o=n.opacity,s=(t.width,t.height,n.black),h=n.green,r=[];t.preload=function(){a=t.loadImage(Y)};var c=0;t.setup=function(){d(t),t.colorMode(t.HSB,360,100,100,100),t.color(s.h,s.s,s.b,s.a),i=t.color(h.h,h.s,h.b,h.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i);for(var o=0,a=i,n=0;n<t.width;n+=76){for(var l=0;l<t.height+95;l+=66.5)o=c%2==1?n+19:n,r.push(new e(n+":"+l,o,l,38,95,a)),c++;c=0}},t.draw=function(){u(t,s.h,s.s,s.b,o.high),t.image(a,0,0,t.width,t.height),p()};var p=function(){for(var e=0;e<r.length;e++){var i=r[e];t.dist(i.x,i.y,t.mouseX,t.mouseY)<=400/(1+.2*t.dist(t.mouseX,t.mouseY,t.pmouseX,t.pmouseY))&&i.display()}};t.windowResized=function(){l(t)}},j=i.p+"static/letterI-5ad0a85db6e52f3a8cb690a47852c469.png",O=i.p+"static/letterI-bg-06c4f917e5a4ab56ae8ab2401d42258f.png",z=function(t){d(t),Object.keys(n).splice(0,1);var e,i,o,s,a,h=n.black,r=n.white,c=n.opacity,w=0;t.preload=function(){s=t.loadImage(j),a=t.loadImage(O)},t.setup=function(){o=d(t),t.colorMode(t.HSB,360,100,100,100),e=t.color(r.h,r.s,r.b,r.a),i=t.color(h.h,h.s,h.b,h.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i)},t.draw=function(){var i=w%2?s:a;t.image(i,0,0,t.width,t.height),f(t,e),u(t,h.h,h.s,h.b,c.low),o.mousePressed((function(){w++})),p(t)},t.windowResized=function(){l(t)}},W=i.p+"static/dotCalendar-efa60bcc15450710e0fc1ec127a6ad94.png",E=[w,m,M,S,A,B,D,H,z,function(t){d(t);t.width,t.height;Object.keys(n).splice(0,1);var e,i,o=n.opacity,s=n.black,a=n.pink;t.preload=function(){h=t.loadImage(W)},t.setup=function(){d(t),t.colorMode(t.HSB,360,100,100,100),e=t.color(s.h,s.s,s.b,s.a),i=t.color(a.h,a.s,a.b,a.a),t.ellipseMode(t.RADIUS),t.noCursor(),t.frameRate(30),t.background(i)},t.draw=function(){t.image(h,0,0,t.width,t.height),u(t,a.h,a.s,a.b,o.low),f(t,e,void 0),w()},t.windowResized=function(){l(t)};var r=66,c=104,p=75,w=function(){for(var i,s,a,h=0,n=0;n<E.length-2;n++)i=r+n%7*p,s=c+(h=n>0&&n%7==0?h+1:h)*p,a=20,t.push(),t.translate(i,s),t.noFill(),t.stroke(t.hue(e),o.mid),t.strokeWeight(4),t.line(-a,-a,a,a),t.line(-a,a,a,-a),t.pop();t.push(),t.noFill(),t.stroke(t.hue(e),o.mid),t.strokeWeight(4),t.circle(r+(E.length-2)%7*p,c+h*p,20),t.pop()}}]}}]);
//# sourceMappingURL=ebc42dd8f6c6ddac499848d55488a688ab1c3c76-460990b72f5311e1f4f4.js.map