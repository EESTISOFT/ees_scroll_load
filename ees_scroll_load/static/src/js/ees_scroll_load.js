// -*- coding: utf-8 -*-
// © 2018 Eestisoft - Hideki Yamamoto
// License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).

odoo.define('ees_scroll_load.overloads', function (require) {
"use strict";
var core = require('web.core');var ListRenderer = require('web.ListRenderer');
var KanbanRenderer = require('web.KanbanRenderer');
var BasicController = require('web.BasicController');

BasicController.include({_updatePager:function(){this._super();
		var view=this;setTimeout(()=>{ees.scroll_load.setupscroll(view)},500);
    },
});

});


try{ees.test=false;delete ees.test}catch{window.ees={};}
ees.scroll_load={loading:false,
	loadall:function(linkelm){
		jQuery('.o_pager_value').click();setTimeout(()=>{jQuery('.o_pager_value .o_input').focus()
			var x=jQuery('.o_pager_value .o_input').get(0);
			var intval=parseInt(linkelm.firstChild.innerHTML);
			var doit=true;
			if(intval>5000){if(!confirm('This search includes '+intval+' records and could require some minutes, do you want to proceed?')){doit=false}}
			if(doit){x.value='1-'+linkelm.firstChild.innerHTML;}			
			jQuery('.o_pager_value .o_input').blur()},100);		
	},
	setupscroll:function(view){var doit=true;var elm=view.$el.get(0);var elm2=view.$el.get(0);
		try{elm=elm.parentNode.parentNode}catch(ex){doit=false;};
		if(doit){elm=jQuery(elm);elm.off('scroll');elm.on('scroll',(ev)=>{ees.scroll_load.checkscroll(ev,view)});}		
		doit=true;try{elm2=elm2.parentNode.parentNode.parentNode.parentNode}catch(exx){doit=false;};
		if(doit){elm2=jQuery(elm2);elm2.off('scroll');elm2.on('scroll',(ev)=>{ees.scroll_load.checkscroll(ev,view)});}
		doit=true;try{elm2=view.el.parentNode}catch(exx){doit=false;};
		if(doit){elm2=jQuery(elm2);elm2.off('scroll');elm2.on('scroll',(ev)=>{ees.scroll_load.checkscroll(ev,view)});}	
	},
	checkscroll:function(ev,view){var CT=view.renderer.state.count;var DC=view.renderer.state.data.length;
		if(DC<CT){var oh=ev.currentTarget.offsetHeight;var h=ev.currentTarget.scrollHeight;var t=ev.currentTarget.scrollTop;var bh=oh/(h/oh);
			if((h-t)<(bh*(h/oh))+100){ees.scroll_load.loadmore(view.renderer)}}},
	loadmore:function(listrenderer){
		if(!ees.scroll_load.loading){ees.scroll_load.loading=true;var doit=true;
		var elm=jQuery(listrenderer.$el.get()).get(0);try{elm=elm.parentNode.parentNode.parentNode.parentNode;}catch(ex){doit=false;};
		if(doit){jQuery('.o_pager_value').click();
		setTimeout(()=>{
			var x=jQuery(elm).find('.o_pager_value .o_input').get(0);
			var intval=parseInt(document.getElementsByClassName('o_pager_limit')[0].innerHTML);
			var xx=x.value.split('-');
			var newint=parseInt(xx[1]);
			newint=newint+80;
			if(newint>intval){newint=intval;}
			x.setAttribute('value','1-'+newint.toString());
			jQuery(elm).find('.o_pager_value .o_input').blur()},100);}
		setTimeout(()=>{ees.scroll_load.loading=false;},500);
	}	},
};
