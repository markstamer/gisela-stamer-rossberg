// Created by iWeb 3.0.1 local-build-20100728

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,302),url:'Kontakt_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Kontakt_files/stroke_1.png'},{rect:new IWRect(5,-5,441,10),url:'Kontakt_files/stroke_2.png'},{rect:new IWRect(446,-5,10,10),url:'Kontakt_files/stroke_3.png'},{rect:new IWRect(446,5,10,302),url:'Kontakt_files/stroke_4.png'},{rect:new IWRect(446,307,10,10),url:'Kontakt_files/stroke_5.png'},{rect:new IWRect(5,307,441,10),url:'Kontakt_files/stroke_6.png'},{rect:new IWRect(-5,307,10,10),url:'Kontakt_files/stroke_7.png'}],new IWSize(451,312))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kontakt_files/KontaktMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
