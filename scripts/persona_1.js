/**
 * Created by parland on 12/1/15.
 */
function persona_1_main() {

    var can = '<canvas id="c" height="446" width="446"></canvas>';
    //$(this).parent().append($(can).css({top: 100, left: 100, position:'absolute'}));
    $(this).parent().append(window.ClosableDiv.init(can).css({height:"400",width:"446",backgroundColor:"darkblue"}));


    //try {
    //    window.AG_onLoad = function (func) {
    //        if (window.addEventListener) {
    //            window.addEventListener('DOMContentLoaded', func);
    //        }
    //    };
    //    window.AG_removeElementById = function (id) {
    //        var element = document.getElementById(id);
    //        if (element && element.parentNode) {
    //            element.parentNode.removeChild(element);
    //        }
    //    };
    //    window.AG_removeElementBySelector = function (selector) {
    //        if (!document.querySelectorAll) {
    //            return;
    //        }
    //        var nodes = document.querySelectorAll(selector);
    //        if (nodes) {
    //            for (var i = 0; i < nodes.length; i++) {
    //                if (nodes[i] && nodes[i].parentNode) {
    //                    nodes[i].parentNode.removeChild(nodes[i]);
    //                }
    //            }
    //        }
    //    };
    //    window.AG_each = function (selector, fn) {
    //        if (!document.querySelectorAll) return;
    //        var elements = document.querySelectorAll(selector);
    //        for (var i = 0; i < elements.length; i++) {
    //            fn(elements[i]);
    //        }
    //        ;
    //    };
    //    var AG_removeParent = function (el, fn) {
    //        while (el && el.parentNode) {
    //            if (fn(el)) {
    //                el.parentNode.removeChild(el);
    //                return;
    //            }
    //            el = el.parentNode;
    //        }
    //    };
    //    var AdFox_getCodeScript = function () {
    //    };
    //    AG_onLoad(function () {
    //        window.AG_each('iframe[id^="AdFox_iframe_"]', function (el) {
    //            if (el && el.parentNode) {
    //                el.parentNode.removeChild(el);
    //            }
    //        });
    //    });
    //} catch (ex) {
    //    console.error('Error executing AG js: ' + ex);
    //}


    //setTimeout(function(){
    //    var ga = document.createElement('script');
    //    ga.async = true;
    //    ga.defer = true;
    //    ga.src = 'http://www.google-analytics.com/ga.js';
    //    ga.onload = function(){try{_gat._getTracker('UA-19882353-1')._trackPageview();}catch(e){window.console&&console.log("ga fail :'( ");};};
    //    var s = document.getElementsByTagName('script')[0];
    //    s.parentNode.insertBefore(ga, s);
    //}, 10);


    //M=Math;Q=M.random;J=[];U=16;T=M.sin;E=M.sqrt;for(O=k=0;x=z=j=i=k<200;)with(M[k]=k?c.cloneNode(0):c){width=height=k?32:W=446;with(getContext('2d'))if(k>10|!k)for(font='60px Impact',V='rgba(';I=i*U,fillStyle=k?k==13?V+'205,205,215,.15)':V+(147+I)+','+(k%2?128+I:0)+','+I+',.5)':'#cca',i<7;)beginPath(fill(arc(U-i/3,24-i/2,k==13?4-(i++)/2:8-i++,0,M.PI*2,1)));else for(;x=T(i),y=Q()*2-1,D=x*x+y*y,B=E(D-x/.9-1.5*y+1),R=67*(B+1)*(L=k/9+.8)>>1,i++<W;)if(D<1)beginPath(strokeStyle=V+R+','+(R+B*L>>0)+',40,.1)'),moveTo(U+x*8,U+y*8),lineTo(U+x*U,U+y*U),stroke();for(y=H=k+E(k++)*25,R=Q()*W;P=3,j<H;)J[O++]=[x+=T(R)*P+Q()*6-3,y+=Q()*U-8,z+=T(R-11)*P+Q()*6-3,j/H*20+((j+=U)>H&Q()>.8?Q(P=9)*4:0)>>1]}setInterval(function G(m,l){A=T(D-11);if(l)return(m[2]-l[2])*A+(l[0]-m[0])*T(D);a.clearRect(0,0,W,W);J.sort(G);for(i=0;L=J[i++];a.drawImage(M[L[3]+1],207+L[0]*A+L[2]*T(D)>>0,L[1]>>1)){if(i==2e3)a.fillText('Merry Christmas!',U,345);if(!(i%7))a.drawImage(M[13],((157*(i*i)+T(D*5+i*i)*5)%W)>>0,((113*i+(D*i)/60)%(290+i/99))>>0);}D+=.02},1)



    //(function () {
    //    var doc = document;
    //    var header = doc.getElementsByTagName("header")[0];
    //    var firstChild = header.firstChild;
    //    var p = doc.getElementsByClassName("p")[0];
    //    var n = doc.getElementsByClassName("n")[0];
    //    header.insertBefore(p, firstChild);
    //    header.insertBefore(n, firstChild);
    //    header.appendChild(doc.getElementsByTagName("p")[0])
    //})();

    (function reload() {
        //var doc = document;
        //var header = doc.getElementsByTagName("header")[0];
        //var iframe = doc.createElement("iframe");
        //doc.body.appendChild(iframe);
        //var iwin = iframe.contentWindow;
        //var idoc = iframe.contentDocument;
        //idoc.open();
        //idoc.close();
        //idoc.write('<!doctype html><head><meta charset="utf-8"><body>');
        //idoc.head.innerHTML = "<style>\n" + "html, body { margin: 0; padding: 0; border: 0; width: 100%; height: 100%; }\n" + "</style>\n";
        //idoc.body.innerHTML = "\n\t\t" + "<canvas" + ' id="c"' + '' + "></canvas>\n" +
        //(true ? "<script>\x3c/script>\n" : "") + "";
        //var Audio = iwin.Audio;
        //iwin.Audio = function (x) {
        //    return new Audio(x)
        //};
        //console.log(window.c);
        var iwin = window;
        var canvas = jQuery("#c")[0];
        //console.log(canvas);
        iwin.a = canvas.getContext("2d");
        //iwin.b = idoc.body;
        iwin.c = canvas;
        var p2d = iwin.Path2D;


        function wrap(ctx) {
            var fill = ctx.fill, clip = ctx.clip, stroke = ctx.stroke;
            ctx.scale = ctx.scale;
            ctx.drawFocusIfNeeded = ctx.drawFocusIfNeeded;
            ctx.ellipse = ctx.ellipse;
            ctx.fill = function (r) {
                fill.call(ctx, r === "evenodd" ? "evenodd" : "nonzero")
            };
            ctx.stroke =
                function (p) {
                    if (p && p2d && p instanceof p2d)stroke.call(ctx, p); else stroke.call(ctx)
                };
            ctx.clip = function (p) {
                if (p && p2d && p instanceof p2d)clip.call(ctx, p); else clip.call(ctx)
            };
            return ctx
        }

        var cvs = iwin.c;
        var cNode = cvs.cloneNode;
        cvs.cloneNode = function () {
            var clone = cNode.apply(cvs, arguments);
            var cloneGet = clone.getContext;
            clone.getContext = function () {
                return wrap(cloneGet.call(clone, "2d"))
            };
            return clone
        };
        var get = cvs.getContext;
        cvs.getContext = function () {
            return wrap(get.call(cvs, "2d"))
        };

        //idoc.body.clientWidth;
        //var demo = idoc.createElement("script");
        //var scrpt = doc.querySelector('script[type="demo"]').textContent.replace(/m.location=m.location;/, "top.reload();");
        //if (false)scrpt = "A=0,B=0;" + scrpt;
        //demo.textContent = scrpt;
        //idoc.body.appendChild(demo);
        //idoc.close();
        //iframe.contentWindow.focus();
        //var r = doc.createElement("div");
        //r.innerHTML = "&#8635;";
        //r.className = "button r";
        //r.title = "restart just the demo (local, without remote fetch)";
        //window.reload = r.onclick = function () {
        //    doc.body.removeChild(iframe);
        //    r.parentElement.removeChild(r);
        //    iframe = null;
        //    r = null;
        //    idoc = null;
        //    header = null;
        //    reload()
        //};
        //var firstLine = doc.getElementsByTagName("div")[0];
        //header.insertBefore(r, firstLine)
    })();



    var M = Math;
    var Q = M.random;
    var J = [];
    var U = 16;
    var T = M.sin;
    var E = M.sqrt;

    for (O = k = 0; x = z = j = i = k < 200;) {
        with (M[k] = k ? c.cloneNode(0) : c) {
            width = height = k ? 32 : W = 446;
            var cntx = getContext('2d');
            with (getContext('2d')) {
                //console.log(cntx);
                //console.log(V);
                if (k > 10 | !k)
                    for (font = '45px Impact', V = 'rgba(';
                         I = i * U, fillStyle = k ? k == 13 ? V + '205,205,215,.15)' : V + (147 + I) + ',' + (k % 2 ? 128 + I : 0) + ',' + I + ',.5)' : '#cca', i < 7;) {
                        // CanvasRenderingContext2D.prototype.arc =
                        // function(x,y,radius,startAngle,endAngle,anticlockwise) {};
                        if(cntx.arc) {
                            cntx.beginPath();
                            //console.log("k:" + k + " M[k]:" + M[k] + "  " + cntx.arc);
                            var arc = cntx.arc(
                                U - i / 3, 24 - i / 2, k == 13 ? 4 - (i++) / 2 : 8 - i++, 0, M.PI * 2, true
                            );
                            cntx.fill(arc);
                        } else {
                            i++;
                        }
                    }
                else
                {
                    for (; x = T(i), y = Q() * 2 - 1, D = x * x + y * y, B = E(D - x / .9 - 1.5 * y + 1), R = 67 * (B + 1) * (L = k / 9 + .8) >> 1, i++ < W;)
                        if (D < 1)
                            cntx.beginPath(strokeStyle = V + R + ',' + (R + B * L >> 0) + ',40,.1)'),
                                cntx.moveTo(U + x * 8, U + y * 8),
                                cntx.lineTo(U + x * U, U + y * U),
                                cntx.stroke();
                }
            }
            for (y = H = k + E(k++) * 25, R = Q() * W; P = 3, j < H;)
                J[O++] = [
                    x += T(R) * P + Q() * 6 - 3,
                    y += Q() * U - 8,
                    z += T(R - 11) * P + Q() * 6 - 3,
                    j / H * 20 + ((j += U) > H & Q() > .8 ? Q(P = 9) * 4 : 0) >> 1
                ]
        }
    }
    window.animation = setInterval(function G(m, l) {
        A = T(D - 11);
        if (l)return (m[2] - l[2]) * A + (l[0] - m[0]) * T(D);
        a.clearRect(0, 0, W, W);
        J.sort(G);
        for (i = 0; L = J[i++]; a.drawImage(M[L[3] + 1], 207 + L[0] * A + L[2] * T(D) >> 0, L[1] >> 1)) {
            if (i == 2e3)a.fillText('Arcada önskar God Jul!', U, 345);
            if (!(i % 7))a.drawImage(M[13], ((157 * (i * i) + T(D * 5 + i * i) * 5) % W) >> 0, ((113 * i + (D * i) / 60) % (290 + i / 99)) >> 0);
        }
        D += .02
    }, 1);

}