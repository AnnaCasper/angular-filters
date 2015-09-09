app.filter('kebab', function () {
  return function (input) {
    if(typeof input === 'number'){
      return input
    } else {
      return input.replace(/_/g , "-");
    }
  };
});
