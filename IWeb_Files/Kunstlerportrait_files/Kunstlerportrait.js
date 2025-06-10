// Created by iWeb 3.0.1 local-build-20100728

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:3.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,273),url:'Kunstlerportrait_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Kunstlerportrait_files/stroke_1.png'},{rect:new IWRect(2,-2,171,4),url:'Kunstlerportrait_files/stroke_2.png'},{rect:new IWRect(173,-2,4,4),url:'Kunstlerportrait_files/stroke_3.png'},{rect:new IWRect(173,2,4,273),url:'Kunstlerportrait_files/stroke_4.png'},{rect:new IWRect(173,275,4,4),url:'Kunstlerportrait_files/stroke_5.png'},{rect:new IWRect(2,275,171,4),url:'Kunstlerportrait_files/stroke_6.png'},{rect:new IWRect(-2,275,4,4),url:'Kunstlerportrait_files/stroke_7.png'}],new IWSize(175,277)),stroke_1:new IWStrokeParts([{rect:new IWRect(-2,2,4,146),url:'Kunstlerportrait_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'Kunstlerportrait_files/stroke_9.png'},{rect:new IWRect(2,-2,377,4),url:'Kunstlerportrait_files/stroke_10.png'},{rect:new IWRect(379,-2,4,4),url:'Kunstlerportrait_files/stroke_11.png'},{rect:new IWRect(379,2,4,146),url:'Kunstlerportrait_files/stroke_12.png'},{rect:new IWRect(379,148,4,4),url:'Kunstlerportrait_files/stroke_13.png'},{rect:new IWRect(2,148,377,4),url:'Kunstlerportrait_files/stroke_14.png'},{rect:new IWRect(-2,148,4,4),url:'Kunstlerportrait_files/stroke_15.png'}],new IWSize(381,150)),reflection_1:new IWReflection({opacity:0.50,offset:3.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kunstlerportrait_files/KunstlerportraitMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
