<template>
<div>

  <div class="pp-form">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="DWTR47KF7U696">
      <table>
        <tr><td><input type="hidden" name="on0" value="Eagle Tracks Vol. 1 Cassette Tape">Eagle Tracks Vol. 1 Cassette Tape</td></tr><tr><td><select name="os0">
          <option value="U.S.A. (Shipping Included)">U.S.A. (Shipping Included) $12.00 USD</option>
          <option value="International (shipping Included)">International (shipping Included) $20.00 USD</option>
        </select> </td></tr>
      </table>
      <input type="hidden" name="currency_code" value="USD">
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  </div>
  <div class="img-wrap">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
    <img src="../assets/gifs/buyknow.gif" alt="Buy Now">
  </div>
</div>

</template>
<script>
export default {
  name: 'BuyNow',
}
</script>

<style scoped>
.pp-form {
  text-align: center;
  margin: 10px auto;
  background: green;
  border: 10px dashed yellow;
  border-top-color: pink;
  border-bottom-color: fuchsia;
  border-right-color: orange;
  padding: 30px;
  max-width: 500px;
}
.img-wrap {
  display: flex;
  justify-content: center;
}
table {
  margin: 0 auto;
}

</style>