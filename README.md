# Front-End-Class-Project

Louie has the best pizza in town, but his small pizza shop is only known to some die-hard local fans. Louie wants to expand his business and attract new customers so that more people can enjoy his amazing pizza. Louie has contracted you to build a website for "Louie's Pizza" and he has provided you with a PDF with what he wants the final product to look like. You will build a site that matches Louie's design in phases, with the final product being a marketing site that will help Louie grow his business.

To view a mockup of what we are building please visit: https://xd.adobe.com/view/37712139-3ff5-4da0-950f-16954ee9df0d/


Part 2
-------

### Layout & grid

Let's get the layout and grid started!

1. This first block is the responsive grid for mobile. Let's copy & paste the css block below into your style.css file.

```

/*****Layout******/

.col {
  margin: 1% 0 1% 0%;
}

.span_1_of_4, .span_2_of_4, .span_3_of_4, .span_4_of_4 {
  width: 100%;
}

.span_3_of_3, .span_2_of_3, .span_1_of_3 {
  width: 100%;
}

.span_2_of_2, .span_1_of_2 {
  width: 100%;
}

.section {
	clear: both;
	padding: 0px;
	margin: 0px;
}

.col {
  margin: 1% 0 1% 0%;
}

.group:before, .group:after {
  content:""; display:table;
}
.group:after {
  clear:both;
}
.group {
  zoom:1; /* For IE 6/7 */
}

```
2. Let's add the desktop media queries next.

3. Create a new CSS file called ```mediaqueries.css``` in the css folder.

4. Next copy & paste the following block into ```mediaqueries.css```.

```
/*****Media Queries******/


@media (min-width: 992px) {

/*****Layout******/

  .col {
  	display: block;
  	float:left;
  	margin: 1% 0 1% 1.6%;
  }
  .col:first-child {
    margin-left: 0;
  }
  .span_1_of_2 {
    width: 49.2%;
  }
  .span_2_of_2 {
    width: 100%;
  }
  .span_3_of_3 {
    width: 100%;
  }
  .span_2_of_3 {
    width: 66.13%;
  }
  .span_1_of_3 {
    width: 32.26%;
  }
  .span_4_of_4 {
	width: 100%;
  }
  .span_3_of_4 {
  	width: 74.6%;
  }
  .span_2_of_4 {
  	width: 49.2%;
  }
  .span_1_of_4 {
  	width: 23.8%;
  }
  
 }
 
```




### Discussion/Reinforcement Points

  1. ???
