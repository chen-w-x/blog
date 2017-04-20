;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-liuyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.946496 112.591872l-487.12704 0c-113.107968 0-204.8 91.692032-204.8 204.8l0 173.343744c0 113.107968 91.692032 204.8 204.8 204.8l52.460544 0 0 216.56576 248.818688-216.56576 185.847808 0c113.107968 0 204.8-91.692032 204.8-204.8L960.746496 317.391872C960.746496 204.283904 869.054464 112.591872 755.946496 112.591872zM296.827904 486.659072c-43.829248 0-79.36-35.530752-79.36-79.36s35.530752-79.36 79.36-79.36 79.36 35.530752 79.36 79.36S340.656128 486.659072 296.827904 486.659072zM511.353856 486.659072c-43.829248 0-79.36-35.530752-79.36-79.36s35.530752-79.36 79.36-79.36 79.36 35.530752 79.36 79.36S555.18208 486.659072 511.353856 486.659072zM724.846592 486.659072c-43.829248 0-79.36-35.530752-79.36-79.36s35.530752-79.36 79.36-79.36 79.36 35.530752 79.36 79.36S768.67584 486.659072 724.846592 486.659072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouc01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M954.742125 429.268764l-316.211848-45.952588L497.114476 96.777137 339.211167 402.3773c8.023744 8.023744 16.047488 16.067954 24.077372 24.090675l133.824915-256.82018 119.994931 243.147786 268.336468 38.980803-194.162118 189.272761 45.826721 267.25688L497.114476 782.125207 257.106194 908.305001l45.832861-267.25688L108.770797 451.776384l148.196227-19.500123c-9.473769-9.493212-18.968004-18.974144-28.455075-28.461215L39.473525 429.268764l228.823546 223.050052-54.022381 314.932716 282.839787-148.700717L779.9471 967.251531l-54.027497-314.932716L954.742125 429.268764z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tupian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1022.935551 817.496881c0 21.288981-14.902287 40.449064-34.06237 48.964657l0 57.480249c19.160083 6.386694 34.06237 25.546778 34.06237 48.964657 0 27.675676-23.417879 51.093555-51.093555 51.093555-21.288981 0-40.449064-14.902287-48.964657-34.06237l-57.480249 0c-6.386694 19.160083-25.546778 34.06237-48.964657 34.06237-21.288981 0-40.449064-14.902287-48.964657-34.06237l-57.480249 0c-6.386694 19.160083-25.546778 34.06237-48.964657 34.06237-21.288981 0-40.449064-14.902287-48.964657-34.06237l-57.480249 0C552.449064 1006.968815 533.288981 1021.871102 512 1021.871102c-21.288981 0-40.449064-14.902287-48.964657-34.06237l-57.480249 0c-6.386694 19.160083-25.546778 34.06237-48.964657 34.06237-21.288981 0-40.449064-14.902287-48.964657-34.06237l-57.480249 0c-6.386694 19.160083-25.546778 34.06237-48.964657 34.06237-21.288981 0-40.449064-14.902287-48.964657-34.06237L101.122661 987.808732C92.607069 1006.968815 73.446985 1021.871102 52.158004 1021.871102 24.482328 1021.871102 1.064449 998.453222 1.064449 970.777547c0-21.288981 14.902287-40.449064 34.06237-48.964657l0-57.480249C15.966736 857.945946 1.064449 838.785863 1.064449 817.496881c0-21.288981 14.902287-40.449064 34.06237-48.964657l0-57.480249C15.966736 704.665281 1.064449 685.505198 1.064449 664.216216c0-21.288981 14.902287-40.449064 34.06237-48.964657l0-57.480249C15.966736 551.384615 1.064449 532.224532 1.064449 510.935551c0-21.288981 14.902287-40.449064 34.06237-48.964657l0-57.480249C15.966736 398.10395 1.064449 378.943867 1.064449 357.654886c0-21.288981 14.902287-40.449064 34.06237-48.964657l0-57.480249C15.966736 244.823285 1.064449 225.663202 1.064449 204.37422s14.902287-40.449064 34.06237-48.964657L35.126819 100.058212C15.966736 91.54262 1.064449 72.382536 1.064449 51.093555 1.064449 23.417879 24.482328 0 52.158004 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C164.989605 14.902287 184.149688 0 205.438669 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C318.27027 14.902287 337.430353 0 358.719335 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C471.550936 14.902287 490.711019 0 512 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C624.831601 14.902287 643.991684 0 665.280665 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C778.112266 14.902287 797.272349 0 818.561331 0c21.288981 0 40.449064 14.902287 48.964657 34.06237l57.480249 0C931.392931 14.902287 950.553015 0 971.841996 0 999.517672 0 1022.935551 23.417879 1022.935551 51.093555c0 21.288981-14.902287 40.449064-34.06237 48.964657l0 57.480249C1008.033264 163.925156 1022.935551 183.085239 1022.935551 204.37422s-14.902287 40.449064-34.06237 48.964657l0 57.480249c19.160083 6.386694 34.06237 25.546778 34.06237 48.964657 0 21.288981-14.902287 40.449064-34.06237 48.964657l0 57.480249C1008.033264 470.486486 1022.935551 489.64657 1022.935551 510.935551c0 21.288981-14.902287 40.449064-34.06237 48.964657l0 57.480249c19.160083 6.386694 34.06237 25.546778 34.06237 48.964657 0 21.288981-14.902287 40.449064-34.06237 48.964657l0 57.480249C1008.033264 777.047817 1022.935551 796.2079 1022.935551 817.496881zM886.686071 136.24948 137.313929 136.24948l0 749.372141 749.372141 0L886.686071 136.24948zM443.87526 681.247401 682.31185 391.717256l153.280665 238.43659 0 204.37422L188.407484 834.528067l204.37422-204.37422L443.87526 681.247401zM341.68815 442.810811c-57.480249 0-102.18711-44.706861-102.18711-102.18711 0-57.480249 44.706861-102.18711 102.18711-102.18711s102.18711 44.706861 102.18711 102.18711C443.87526 398.10395 399.168399 442.810811 341.68815 442.810811z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontindexb" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M618.3 918.2l-18.4 0 0 0c-2 0-18.3-0.3-30.6-12.7-5.9-5.8-12.9-16.5-12.9-34.1l0-97.5c-0.1-11.8-3.5-20.5-10.1-26.5-11.8-10.7-32.5-11.6-39.6-11L506 736.4c-15.7 0.7-26.9 4.9-33.2 12.4-7.9 9.2-6.8 21.6-6.7 22.8l0.2 1.3 0 1 0 97.6c0 17.6-6.9 28.3-12.9 34.1-12.4 12.3-28.7 12.7-30.6 12.7l0 0-194.4 0c-23.2 0-42.1-18.9-42.1-42.1L186.3 524.4c0-4-0.8-6.8-2.3-8.4-2.4-2.4-6.8-3-8.4-3l-0.5 0 0 0c-24.3 0-44.3-19.8-44.3-44.3 0-10.7 3.9-21 10.9-29.1l0.8-0.8L481.2 99.8c20.9-21.4 45.9-13.1 57.5-2.3l0.5 0.5 341.2 341.3 0.3 0.5c7.1 8.1 10.9 18.4 10.9 29.1 0 23.6-16.4 41.1-41.1 44l-0.2 0.1-1.6 0.1c-5.8 0.5-12.6 3-12.6 11.6l0 345.8 0 0.1 0 1.4c0 11.3-3.1 21.8-8.6 29.8-7.5 10.7-19.5 16.6-33.5 16.6l-32.1 0L618.3 918.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.082 519.343L508.704 107.59 68.327 518.134c-8.616 8.032-9.097 21.538-1.044 30.144 8.043 8.6 21.566 9.086 30.175 1.036l411.215-383.338 411.233 384.505a21.298 21.298 0 0 0 14.59 5.76c5.69 0 11.384-2.26 15.584-6.757 8.058-8.6 7.615-22.096-0.998-30.14zM814.7 527.801c-11.788 0-21.35 9.556-21.35 21.328v327.037H622.552V648.663H394.825v227.503H224.033V549.129c0-11.772-9.552-21.328-21.348-21.328-11.803 0-21.354 9.556-21.354 21.328V918.82h256.195V691.318h142.33V918.82h256.189V549.13c0-11.772-9.563-21.328-21.345-21.328zM665.255 222.095H793.35v113.749c0 11.79 9.563 21.333 21.35 21.333 11.783 0 21.346-9.544 21.346-21.333V179.44H665.255c-11.79 0-21.353 9.538-21.353 21.328-0.001 11.786 9.562 21.327 21.353 21.327z m0 0"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.1 64.2c-246.8 0-446.9 200.1-446.9 446.9S264.3 958 511.1 958 958 757.9 958 511.1 757.8 64.2 511.1 64.2z m236.7 456.5c-5.3 16.7-11.9 32.2-19.8 46.7-7.9 14.4-16.4 27.7-26.1 40-9.4 12.3-18.9 23.4-28.5 33.2-14.6 15-29.8 29.1-45.7 41.9-15.9 12.9-31.2 24.2-45.5 33.5-14.5 9.3-27.6 16.8-39.5 22.3-11.8 5.4-21.2 8.1-27.7 8.1-7.4 0.4-16.7-2.2-27.9-7.6-11.4-5.6-23.9-12.8-37.4-22.3-13.5-9.3-27.8-20.4-42.8-33.2s-29.8-26.4-44.4-40.6c-9.5-9.1-19.8-19.8-30.7-31.8-10.9-12.1-21.3-25.3-31.1-39.8-9.6-14.4-18-30.1-24.9-46.9-6.9-16.8-10.7-34.7-11.5-53.8-0.7-19 1.3-36.9 6.1-53.5 4.7-16.6 11.8-31.5 21.4-44.7 9.5-13.1 21.3-24.3 35.1-33.2 13.9-8.9 29.7-15.2 47.2-18.9 8.6-1.8 17.4-2.1 26.3-0.8 8.6 1.3 17.3 3.5 25.8 6.5 8.3 3.2 16.4 7.1 24.1 11.9 7.8 4.7 15 9.6 22 14.8 16 12 31.4 26.5 46 43.2 12-14.9 24.9-28.5 38.4-40.5 11.7-9.9 25-18.9 39.7-26.9 14.8-8.1 30.2-11.5 46.3-10.5 22.7 1.9 41.5 7.3 56.8 16.2 15.2 8.9 27.3 20.3 36.2 33.9 8.9 13.8 15 29.3 18.4 46.7 3.3 17.3 4.4 35.2 3.3 53.6-1 18.4-4.2 35.9-9.6 52.5z" fill="#FF757E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-491.52 0a491.52 491.52 0 1 0 983.04 0 491.52 491.52 0 1 0-983.04 0Z" fill="#00A0E9" ></path>' +
    '' +
    '<path d="M710.51264 500.79744c0 77.43488 0.34816 146.88256-0.18432 216.30976-0.18432 23.83872-15.7696 34.38592-37.64224 34.46784-114.64704 0.4096-229.29408 0.57344-343.94112-0.1024-24.65792-0.14336-36.20864-15.40096-36.18816-40.12032 0.12288-122.368 0.04096-244.75648-0.02048-367.12448-0.02048-27.21792 15.29856-40.57088 40.63232-40.89856 68.25984-0.86016 136.56064-0.4096 204.82048-0.16384 7.00416 0.02048 17.2032-3.03104 19.08736 7.45472 1.82272 10.21952-6.18496 17.48992-14.5408 20.19328-9.50272 3.072-20.1728 3.2768-30.35136 3.33824-52.81792 0.28672-105.63584 0.75776-158.43328-0.2048-20.23424-0.36864-30.3104 3.74784-30.1056 27.32032 1.024 110.75584 0.75776 221.55264 0.12288 332.32896-0.12288 19.61984 5.9392 27.38176 26.46016 27.2384 100.47488-0.7168 200.97024-0.8192 301.44512 0.12288 22.67136 0.2048 28.4672-8.88832 27.97568-29.7984-1.08544-47.63648 0.63488-95.3344-0.75776-142.9504-0.63488-20.6848 7.65952-32.78848 31.62112-47.4112z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M788.64384 333.5168c1.24928 14.60224-13.96736 29.98272-27.8528 44.25728-60.74368 62.32064-123.20768 122.96192-183.84896 185.38496-37.21216 38.2976-88.73984 42.47552-134.81984 58.73664-15.27808 5.38624-23.42912-6.3488-18.67776-28.99968 16.15872-76.82048 55.7056-136.0896 115.24096-186.28608 44.48256-37.51936 82.96448-82.06336 124.80512-122.75712 20.84864-20.2752 45.4656-37.25312 75.28448-22.44608 25.31328 12.55424 47.90272 30.69952 49.8688 72.11008z m-32.5632-7.49568c3.01056-16.4864-10.6496-24.82176-21.4016-32.39936-12.0832-8.51968-26.8288-8.56064-38.62528 3.13344-70.06208 69.36576-140.9024 137.95328-209.18272 209.01888-12.82048 13.35296-16.40448 36.352-22.03648 55.56224-3.42016 11.6736 3.46112 23.38816 16.1792 16.95744 21.25824-10.77248 46.57152-10.28096 65.18784-29.16352 62.23872-63.01696 126.3616-124.14976 188.78464-186.9824 9.23648-9.3184 21.48352-19.00544 21.0944-36.12672z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzhang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M911.511808 102.4c0-56.4224-46.6432-102.4-104.2432-102.4H129.790208C72.241408 0 25.547008 45.824 25.547008 102.4v819.2c0 56.4224 46.6432 102.4 104.2432 102.4h287.0784c14.1312 0 25.6-11.8784 25.6-25.6 0-14.1312-11.8784-25.6-25.6-25.6H129.790208a51.712 51.712 0 0 1-52.1216-51.2V102.4c0-28.2624 23.3472-51.2 52.1216-51.2h677.4784c28.7232 0 52.1216 23.04 52.1216 51.2v332.6464c0 14.2336 11.0592 25.7536 26.112 25.7536a26.1632 26.1632 0 0 0 26.0096-25.7536V102.4z m-248.32 891.1872l319.8976-315.2384a50.6368 50.6368 0 0 0-0.0512-72.5504l-69.12-68.096a52.736 52.736 0 0 0-73.8304 0l-319.488 315.1872c-15.1552 14.8992-26.0096 40.96-26.0096 62.0544v52.8896c0 28.3648 23.296 51.456 52.224 51.456h53.4016a98.816 98.816 0 0 0 62.976-25.7024z m-36.864-36.1472a47.872 47.872 0 0 1-26.112 10.6496H546.763008l-0.0512-0.256V914.944c0-7.5776 5.4272-20.6336 10.8032-25.9584l319.488-315.1872v0.1024l69.12 68.096c0.1536 0.1024 0.1536 0.1024 0 0.2048L626.327808 957.44z m-418.3552-368.64c0-14.1312 11.8784-25.6 25.9072-25.6h208.6912c14.336 0 25.9584 11.3664 25.9584 25.6 0 14.1312-11.8784 25.6-25.9584 25.6H233.931008a25.7024 25.7024 0 0 1-25.9072-25.6z m0-153.6c0-14.1312 11.6736-25.6 26.2144-25.6h338.3808c14.4896 0 26.2656 11.3664 26.2656 25.6 0 14.1312-11.7248 25.6-26.2656 25.6H234.187008a25.856 25.856 0 0 1-26.2144-25.6z m0-153.6c0-14.1312 11.5712-25.6 25.856-25.6h417.28c14.336 0 25.9072 11.3664 25.9072 25.6 0 14.1312-11.6224 25.6-25.9072 25.6h-417.28a25.7024 25.7024 0 0 1-25.856-25.6z" fill="#5490C0" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)