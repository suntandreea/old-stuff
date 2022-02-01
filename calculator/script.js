var r = new Array(2);

function setStartState(){
  state="start";
  r[0] = "0";
  r[1] = "0";
  operand="";
  ix=0;
};

function addDigit(n){
  if(state=="gettingInteger" || state=="gettingFloat"){
    r[ix]=appendDigit(r[ix],n);
  }
  else{
    r[ix]=""+n;
    state="gettingInteger";
  }
  display(r[ix]);
};

function appendDigit(n1,n2){
  if(n1=="0") {
    return ""+n2;
  }
  var s="";
  s+=n1;
  s+=n2;
  return s;
};

function display(s){
  document.calculator.total.value=s;
};

function addDecimalPoint(){
  if(state!="gettingFloat"){ 
    decimal=true;
    r[ix]+=".";
    if(state=="haveOperand" || state=="getOperand2"){
      r[ix]="0.";
    }
    state="gettingFloat";
    display(r[ix]);
  }
};

function clearDisplay(){
  setStartState();
  display(r[0]);
};

function changeSign(){
  if(r[ix].charAt(0)=="-"){
  r[ix]=r[ix].substring(1,r[ix].length);
  }
  else if(parseFloat(r[ix])!=0){
    r[ix]="-"+r[ix];
  }
  display(r[ix]);
};

function calc(){
  if(state=="gettingInteger" || state=="gettingFloat" || state=="haveOperand"){
    if(ix==1){
      r[0]=calculateOperation(operand,r[0],r[1]);
      ix=0;
    }
  }
  else if(state=="getOperand2"){
    r[0]=calculateOperation(operand,r[0],r[0]);
    ix=0;
  }
  state="haveOperand";
  decimal=false;
  display(r[ix]);
};

function calculateOperation(op,x,y){
  var result="";
  if(op=="+"){
    result=""+(parseFloat(x)+parseFloat(y));
  }
  else if(op=="-"){
    result=""+(parseFloat(x)-parseFloat(y));
  }
  else if(op=="*"){
    result=""+(parseFloat(x)*parseFloat(y));
  }
  else if(op=="/"){
    if(parseFloat(y)==0){
      alert("Division by 0 not allowed.");
      result=0;
    }
    else {
      result=""+(parseFloat(x)/parseFloat(y));
    }
  }
  return result;
};

function performOp(op){
  if(state=="start"){
    ++ix;
    operand=op;
  }
  else if(state=="gettingInteger" || state=="gettingFloat" || state=="haveOperand"){
    if(ix==0){
      ++ix;
      operand=op;
    }
    else{
      r[0]=calculateOperation(operand,r[0],r[1]);
      display(r[0]);
      operator=op;
    }
  }
  state="getOperand2";
  decimal=false;
};