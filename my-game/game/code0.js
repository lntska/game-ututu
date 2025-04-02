gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDbackgroundObjects1= [];
gdjs.MainCode.GDbackgroundObjects2= [];
gdjs.MainCode.GDbackgroundObjects3= [];
gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDPlayerObjects3= [];
gdjs.MainCode.GDBallObjects1= [];
gdjs.MainCode.GDBallObjects2= [];
gdjs.MainCode.GDBallObjects3= [];
gdjs.MainCode.GDStartTextObjects1= [];
gdjs.MainCode.GDStartTextObjects2= [];
gdjs.MainCode.GDStartTextObjects3= [];
gdjs.MainCode.GDBarrierObjects1= [];
gdjs.MainCode.GDBarrierObjects2= [];
gdjs.MainCode.GDBarrierObjects3= [];
gdjs.MainCode.GDSingleBrickObjects1= [];
gdjs.MainCode.GDSingleBrickObjects2= [];
gdjs.MainCode.GDSingleBrickObjects3= [];
gdjs.MainCode.GDScoreTextObjects1= [];
gdjs.MainCode.GDScoreTextObjects2= [];
gdjs.MainCode.GDScoreTextObjects3= [];
gdjs.MainCode.GDBackgroundForTextObjects1= [];
gdjs.MainCode.GDBackgroundForTextObjects2= [];
gdjs.MainCode.GDBackgroundForTextObjects3= [];
gdjs.MainCode.GDBottomObjects1= [];
gdjs.MainCode.GDBottomObjects2= [];
gdjs.MainCode.GDBottomObjects3= [];
gdjs.MainCode.GDDoubleBrickObjects1= [];
gdjs.MainCode.GDDoubleBrickObjects2= [];
gdjs.MainCode.GDDoubleBrickObjects3= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects = Hashtable.newFrom({"Barrier": gdjs.MainCode.GDBarrierObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBarrierObjects1Objects = Hashtable.newFrom({"Barrier": gdjs.MainCode.GDBarrierObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects = Hashtable.newFrom({"SingleBrick": gdjs.MainCode.GDSingleBrickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects = Hashtable.newFrom({"SingleBrick": gdjs.MainCode.GDSingleBrickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBottomObjects1Objects = Hashtable.newFrom({"Bottom": gdjs.MainCode.GDBottomObjects1});
gdjs.MainCode.asyncCallback9045500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.MainCode.asyncCallback9045500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoubleBrickObjects1Objects = Hashtable.newFrom({"DoubleBrick": gdjs.MainCode.GDDoubleBrickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoubleBrickObjects1Objects = Hashtable.newFrom({"DoubleBrick": gdjs.MainCode.GDDoubleBrickObjects1});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainCode.GDDoubleBrickObjects1, gdjs.MainCode.GDDoubleBrickObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDDoubleBrickObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDDoubleBrickObjects2[i].getVariableNumber(gdjs.MainCode.GDDoubleBrickObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDDoubleBrickObjects2[k] = gdjs.MainCode.GDDoubleBrickObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDDoubleBrickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDDoubleBrickObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDDoubleBrickObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDoubleBrickObjects2[i].getBehavior("Animation").setAnimationName("Blue");
}
}}

}


{

gdjs.copyArray(gdjs.MainCode.GDDoubleBrickObjects1, gdjs.MainCode.GDDoubleBrickObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDDoubleBrickObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDDoubleBrickObjects2[i].getVariableNumber(gdjs.MainCode.GDDoubleBrickObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDDoubleBrickObjects2[k] = gdjs.MainCode.GDDoubleBrickObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDDoubleBrickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDDoubleBrickObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDDoubleBrickObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDDoubleBrickObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDStartTextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDStartTextObjects1[k] = gdjs.MainCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDStartTextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
/* Reuse gdjs.MainCode.GDStartTextObjects1 */
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8380620);
}
}
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8385820);
}
}
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8919812);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.MainCode.GDScoreTextObjects1);
/* Reuse gdjs.MainCode.GDSingleBrickObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSingleBrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "GetBrick.wav", false, 5, 1);
}{for(var i = 0, len = gdjs.MainCode.GDSingleBrickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSingleBrickObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bottom"), gdjs.MainCode.GDBottomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8859724);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.wav", false, 5, 1);
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("DoubleBrick"), gdjs.MainCode.GDDoubleBrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoubleBrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9646876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
/* Reuse gdjs.MainCode.GDDoubleBrickObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoubleBrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDDoubleBrickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDoubleBrickObjects1[i].returnVariable(gdjs.MainCode.GDDoubleBrickObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8066220);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "GameWin.wav", false, 5, 1);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDbackgroundObjects1.length = 0;
gdjs.MainCode.GDbackgroundObjects2.length = 0;
gdjs.MainCode.GDbackgroundObjects3.length = 0;
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects3.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDBallObjects3.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects3.length = 0;
gdjs.MainCode.GDBarrierObjects1.length = 0;
gdjs.MainCode.GDBarrierObjects2.length = 0;
gdjs.MainCode.GDBarrierObjects3.length = 0;
gdjs.MainCode.GDSingleBrickObjects1.length = 0;
gdjs.MainCode.GDSingleBrickObjects2.length = 0;
gdjs.MainCode.GDSingleBrickObjects3.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects3.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects1.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects2.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects3.length = 0;
gdjs.MainCode.GDBottomObjects1.length = 0;
gdjs.MainCode.GDBottomObjects2.length = 0;
gdjs.MainCode.GDBottomObjects3.length = 0;
gdjs.MainCode.GDDoubleBrickObjects1.length = 0;
gdjs.MainCode.GDDoubleBrickObjects2.length = 0;
gdjs.MainCode.GDDoubleBrickObjects3.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);
gdjs.MainCode.GDbackgroundObjects1.length = 0;
gdjs.MainCode.GDbackgroundObjects2.length = 0;
gdjs.MainCode.GDbackgroundObjects3.length = 0;
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects3.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDBallObjects3.length = 0;
gdjs.MainCode.GDStartTextObjects1.length = 0;
gdjs.MainCode.GDStartTextObjects2.length = 0;
gdjs.MainCode.GDStartTextObjects3.length = 0;
gdjs.MainCode.GDBarrierObjects1.length = 0;
gdjs.MainCode.GDBarrierObjects2.length = 0;
gdjs.MainCode.GDBarrierObjects3.length = 0;
gdjs.MainCode.GDSingleBrickObjects1.length = 0;
gdjs.MainCode.GDSingleBrickObjects2.length = 0;
gdjs.MainCode.GDSingleBrickObjects3.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects3.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects1.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects2.length = 0;
gdjs.MainCode.GDBackgroundForTextObjects3.length = 0;
gdjs.MainCode.GDBottomObjects1.length = 0;
gdjs.MainCode.GDBottomObjects2.length = 0;
gdjs.MainCode.GDBottomObjects3.length = 0;
gdjs.MainCode.GDDoubleBrickObjects1.length = 0;
gdjs.MainCode.GDDoubleBrickObjects2.length = 0;
gdjs.MainCode.GDDoubleBrickObjects3.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
