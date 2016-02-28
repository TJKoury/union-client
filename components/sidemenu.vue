<template>
  <div id='sidemenu'>Hi</div>
</template>

export default{
  name:'sidemenu'
};

</script>
<style>
  #sidemenu{
    position: fixed;
    width:100px;
    height:100vh;
    background:black;
    z-index:100;
    left:-100px;
  }

  #sidemenu.open{
    left:0px;
  }
</style>
