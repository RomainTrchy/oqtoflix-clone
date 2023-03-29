(self.webpackChunkawwwards_new = self.webpackChunkawwwards_new || []).push([
  [3829],
  {
    9729: (e, r, t) => {
      t(5373);
      var a = t(5716),
        o = t(9092),
        s = t(188);
      a.p8.registerPlugin(o.i),
        a.p8.core.globals("ScrollTrigger", o.i),
        a.p8.utils.toArray(".anchor-section").forEach(function (e) {
          o.i.create({
            start: "top 10%",
            end: "bottom 50%",
            toggleClass: "is-intersecting",
            trigger: e,
          });
        }),
        document.querySelectorAll(".js-marquee-sotd").forEach(function (e) {
          for (var r = e.querySelector("div"), t = 0; t < 3; t++) {
            var a = r.cloneNode(!0);
            r.after(a);
          }
        }),
        a.p8
          .to(".js-marquee-sotd div", {
            duration: 10,
            xPercent: -100,
            ease: "none",
            repeat: -1,
          })
          .timeScale(1),
        new s.tq(".slider-site-anime", {
          modules: [s.pt],
          autoplay: { delay: 5e3 },
          effect: "fade",
        });
    },
  },
  (e) => {
    e.O(0, [9755, 6461, 188, 5716, 4610, 9092, 6880, 8559], () => {
      return (r = 9729), e((e.s = r));
      var r;
    });
    e.O();
  },
]);
