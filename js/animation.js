var layer1 = null;


function forward_anim_core() {
    new Pathformer('layer1');
    new Pathformer('layer2');
    new Pathformer('layer3');
    new Pathformer('layer4');
    new Pathformer('layer5');
    new Pathformer('layer6');
    new Pathformer('layer8');   // no layer 7 is there
    new Pathformer('layer9');
    new Pathformer('layer10');
    new Pathformer('layer11');
    new Pathformer('layer12');
    new Pathformer('layer14');
    new Pathformer('layer15');

    //new Vivus('layer0', {duration: 100}, reverse_anim_core);
    new Vivus('layer0', {duration:200}, null);
    layer1 = new Vivus('layer1', {duration:200}, null);
    new Vivus('layer2', {duration:200}, null);
    new Vivus('layer3', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer4', {duration: 200}, null);
    new Vivus('layer5', {duration:200}, null);
    new Vivus('layer6', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer8', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer9', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer10', {duration: 200}, null);
    new Vivus('layer11', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer12', {duration:200}, null);
    new Vivus('layer13', {duration: 200}, null);
    new Vivus('layer14', {duration:200}, null);
    new Vivus('layer15', {duration:200, type:'oneByOne'}, null);
    new Vivus('layer16', {duration:200}, null);

    //reverse_anim_core();
}

function reverse_anim_core() {

    layer1.stop().play(-1);
    /*var $ring1 = $('#layer1').drawsvg();
    $ring1.drawsvg('animate');
    var $ring2 = $('#layer2').drawsvg();
    $ring2.drawsvg('animate');
    var $ring3 = $('#layer3').drawsvg();
    $ring3.drawsvg('animate');
    var $ring4 = $('#layer4').drawsvg();
    $ring4.drawsvg('animate');
    var $ring5 = $('#layer5').drawsvg();
    $ring5.drawsvg('animate');
    var $ring6 = $('#layer6').drawsvg();
    $ring6.drawsvg('animate');
    var $ring8 = $('#layer8').drawsvg();
    $ring8.drawsvg('animate');
    var $ring9 = $('#layer9').drawsvg();
    $ring9.drawsvg('animate');
    var $ring10 = $('#layer10').drawsvg();
    $ring10.drawsvg('animate');
    var $ring11 = $('#layer11').drawsvg();
    $ring11.drawsvg('animate');
    var $ring12 = $('#layer12').drawsvg();
    $ring12.drawsvg('animate');
    var $ring13 = $('#layer13').drawsvg();
    $ring13.drawsvg('animate');
    var $ring14 = $('#layer14').drawsvg();
    $ring14.drawsvg('animate');
    var $ring15 = $('#layer15').drawsvg();
    $ring15.drawsvg('animate');
    var $ring16 = $('#layer16').drawsvg();
    $ring16.drawsvg('animate');*/

}

forward_anim_core();
