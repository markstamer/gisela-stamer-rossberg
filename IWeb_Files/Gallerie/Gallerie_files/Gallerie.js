// Created by iWeb 3.0.1 local-build-20100728

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie/Gallerie_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget6'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(175,131),new IWSize(175,31),new IWSize(263,177),27,27,0,new IWSize(58,51)),new IWPhotoFrame([IWCreateImage('Gallerie_files/kids-blue_ul.png'),IWCreateImage('Gallerie_files/kids-blue_top.jpg'),IWCreateImage('Gallerie_files/kids-blue_ur.png'),IWCreateImage('Gallerie_files/kids-blue_right.png'),IWCreateImage('Gallerie_files/kids-blue_lr.png'),IWCreateImage('Gallerie_files/kids-blue_bottom.png'),IWCreateImage('Gallerie_files/kids-blue_ll.png'),IWCreateImage('Gallerie_files/kids-blue_left.png')],null,0,0.500000,0.000000,0.000000,0.000000,0.000000,71.000000,43.000000,44.000000,58.000000,100.000000,105.000000,100.000000,105.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget6',null,'widget7',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Gallerie_files/GallerieMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
