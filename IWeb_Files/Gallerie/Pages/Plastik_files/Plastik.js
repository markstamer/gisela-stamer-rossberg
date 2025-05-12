// Created by iWeb 3.0.1 local-build-20100728

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie/Pages/Plastik_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.gisela-stamer-rossberg.de/IWeb_Files/Gallerie/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,28),new IWSize(216,223),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,10,170),url:'Plastik_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Plastik_files/stroke_1.png'},{rect:new IWRect(5,-5,170,10),url:'Plastik_files/stroke_2.png'},{rect:new IWRect(175,-5,10,10),url:'Plastik_files/stroke_3.png'},{rect:new IWRect(175,5,10,170),url:'Plastik_files/stroke_4.png'},{rect:new IWRect(175,175,10,10),url:'Plastik_files/stroke_5.png'},{rect:new IWRect(5,175,170,10),url:'Plastik_files/stroke_6.png'},{rect:new IWRect(-5,175,10,10),url:'Plastik_files/stroke_7.png'}],new IWSize(180,180)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Plastik_files/PlastikMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
