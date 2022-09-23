function foo(s,e) 
2	{
3	  
4	        if (s > e) {
5	            var arr = new Array(s - e + 1);
6	            for (var i = 0; i < arr.length; i++, s--) {
7	                resarrult[i] = s;
8	            }
9	            return arr;
10	        } 
11	       else 
12	       {
13	            var arro = new Array(e-s+1);
14	         
15	        for (var i = 0; i < arro.length; i++, s++) 
16	        {
17	            arro[i] = s;
18	        }
19	              return arro;
20	        }
21	    }
22	
23	console.log(foo(3, 7));
24	console.log(foo(-4, 7));