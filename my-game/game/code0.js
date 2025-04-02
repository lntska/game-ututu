gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDbackgroundObjects1= [];
gdjs.MainCode.GDbackgroundObjects2= [];
gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDBallObjects1= [];
gdjs.MainCode.GDBallObjects2= [];
gdjs.MainCode.GDStartTextObjects1= [];
gdjs.MainCode.GDStartTextObjects2= [];
gdjs.MainCode.GDBarrierObjects1= [];
gdjs.MainCode.GDBarrierObjects2= [];
gdjs.MainCode.GDSingleBrickObjects1= [];
gdjs.MainCode.GDSingleBrickObjects2= [];
gdjs.MainCode.GDScoreTextObjects1= [];
gdjs.MainCode.GDScoreTextObjects2= [];
gdjs.MainCode.GDBackgroundForTextObjects1= [];
gdjs.MainCode.GDBackgroundForTextObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects = Hashtable.newFrom({"Barrier": gdjs.MainCode.GDBarrierObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects = Hashtable.newFrom({"Barrier": gdjs.MainCode.GDBarrierObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects = Hashtable.newFrom({"SingleBrick": gdjs.MainCode.GDSingleBrickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects = Hashtable.newFrom({"SingleBrick": gdjs.MainCode.GDSingleBrickObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDStartTextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDStartTextObjects1[k] = gdjs.MainCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDStartTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].setPosition((( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getPointX("Center")),(( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getPointY("Center")) - 25);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDStartTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].addPolarForce(gdjs.randomInRange(-(145), -(45)), 250, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Barrier"), gdjs.MainCode.GDBarrierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
/* Reuse gdjs.MainCode.GDBarrierObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "BarrierTouching.wav", false, 5, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "BarrierTouching.wav", false, 5, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("SingleBrick"), gdjs.MainCode.GDSingleBrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
/* Reuse gdjs.MainCode.GDSingleBrickObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "GetBrick.wav", false, 5, 1);
}{for(var i = 0, len = gdjs.MainCode.GDSingleBrickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSingleBrickObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDbackgroundObjects1.length = 0;
gdjs.MainCode.GDbackgroundObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDBarrierObjects1.length = 0;
gdjs.MainCode.GDBarrierObjects2.length = 0;
gdjs.MainCode.GDSingleBrickObjects1.length = 0;
gdjs.MainCode.GDSingleBrickObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects1.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDbackgroundObjects1.length = 0;
gdjs.MainCode.GDbackgroundObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDBarrierObjects1.length = 0;
gdjs.MainCode.GDBarrierObjects2.length = 0;
gdjs.MainCode.GDSingleBrickObjects1.length = 0;
gdjs.MainCode.GDSingleBrickObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects1.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
