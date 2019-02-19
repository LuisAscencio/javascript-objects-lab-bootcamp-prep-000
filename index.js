var recipes={}

function updateObjectWithKeyAndValue (recipes,spice,amount){ 
  return recipes.assign({}, recipes, { [spice]: amount })
}


