		<script>
			$(document).ready(function(){
				$("h1").sparkle({
				var sparkleTimer,
				$h1 = $("h1")
				.sparkle({ count: 100, speed: 1.5 })
				.off("mouseover.sparkle mouseout.sparkle focus.sparkle blur.sparkle")
				.trigger("start.sparkle");

				$(window).on("resize", function(){
				clearTimeout(sparkleTimer);
				sparkleTimer = setTimeout(function(){
				$header.trigger("resize.sparkle");
				},200);
				});
			});
		</script>

<script>

        $(document).ready(function() {

            $("h1").sparkle({ 

                "color": ["#ff0080","#ff0080","#FFF"] , 
                count: 70 ,
                speed: 0

            });

            $("button").last().sparkle({ 
                "color": "rainbow" , 
                "minSize": 2 , 
                "maxSize": 5 ,
                "overlap": 20 ,
                "direction": "down" ,
                "speed": 1,
                "fadeSpeed":3000
            });

            $("button").first().sparkle({ 
                "minSize": 2 , 
                "maxSize": 10 ,
                "overlap": 20 ,
                "direction": "up" ,
                "speed": 0.4
            });

        });

    </script>

