var recipes={}

function updateObjectWithKeyAndValue (recipes,spice,amount){ 
  return Object.assign({}, recipes, { [spice]: amount })
}


function destructivelyUpdateObjectWithKeyAndValue (recipes,spice,amount){ 
  recipes[comin]="pinch"
  return recipes
}