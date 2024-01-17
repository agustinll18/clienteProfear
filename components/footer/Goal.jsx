const Goal = () => {
  return (
    <div className="goal col-6">
      {/* PLAYER 1 */}
      <div className="wrapper P1">
        <div className="head"></div>
        <div className="torso">
          <img
            src="data:image/png;base64,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"
            className="torso1"
            alt="Camiseta Argentina"
          />
        </div>

        {/* 
        <div className="rightarm"></div> */}
        <div className="legs">
          <div className="leftleg"></div>
          <div className="rightleg"></div>
        </div>
      </div>
      <img
        src="https://img.icons8.com/ios-glyphs/30/null/football2--v1.png"
        alt="Pelota de Futbol"
        className="ball"
      />

      {/* PLAYER 2 */}
      <div className="wrapper P2">
        <div className="head">
          <img src="data:image/png;base64,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"  
            alt="lagrimas LLoris "/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHZUlEQVR4nO1YWWxVRRi+uL6oicZo1CcTFWbu7e0CpSwiAmWRRRYFVMA9Rn0wxu3FB6PGGDUxGmOikdCZ2/aWFgtFKK3IUkBRlNWiuGujETUuRNr559ztN99MLymlLcSeYmP6J5PT3nPOnO/7938ikSEZkiEZkt5E1vF5QtuZUtGLUlGLUOZroehPqcyXQpstQpsnYyqIRwaVMA8TmsqlpkqhTYfUxFjRBHFBFXE8abkwad01Xk0cq8J9s0Ho9uL/FvhTfEa0ouMmoWlfHjRWrJK4sMZySZ3lUW9bLl1tefTqgEevtlxab3nkKsvFtZbjVRREdcfD/wl2uIFUtLMrcCxoGMABeszagMevD/jaxoAnbPDr2saAx60LuKwhcOSKVlqOVtHTpw34xK18llD0vFAmfQL4pNcuwAH4dc0pnvReiqdsTnH5Fr8mb07x9RtTPKHJE4FVYI1owtw+4OCvVh1XCEU7ugPHgq9D8wAPLQNk+dYUz9ie5pkfpHnWTr9ueD/N07elHamJ76YcUUeihv64pvrviwcM/PAVQYFU9HNP4LHgCnAbAAL4qS0pB/zGXRmetzvDC/b6NW93hud85InAIiABS8CdCpL0zICAj1aY8S4V9gIeQQvtw+eva/KuAoA3fpzhm/ZleNGnWV580K+Fn2YdkTm7MjxjR5onb0q52ChbE3BRrf0GGS1U8LKivUhqc6Q38M59qslpEJq8/t0UT2tJ8+wP0zx/b4YXtWb5tkNZXvZ1jpd+leNbD3kSsARcaurWFE9sTjnyUEJUWxEa+GsSdKXQdLgv8PnMc4zAxpTzcbjJgn0Zp3UAv+sH5ju/Z17yZY4Xt3orgCTIwo3GvhO4BBCtsrNDAX/Vq3yuVLTnZODzFhjZgwUW5C3wRY5v/ybnrHDboaxzqfl7Oi3QkupGwCwOhYDQ5rVTAd9XDMzNx0Brlm/5zK9FrVn3G+IDzyAbIaWOafAuVKCpvN/g44mjl0hlcqdKwGWhmuOzEKzgstDHGadtgMaav8eDx72pLWn3LN7Bu4U1lC2oPnJh/9Vfx2dKRTVC0Y9CmaOn5EZd68CGwBUwBCgyDVxl9kd+zdqZdr/hHp7Bs3gH78YqTXNkoKovioxLpxX2IalJS20OSm2yvVbixsD5NtIkXAq+jlWOarzJ+z0KHp7FO/FqymH/yOmUEZXtlwlN90tlNgptUj4j+SYOzRsCE0Tg42grsCY0+UqNe3gGz4K41PRSaMCkMsuFMu1S026hzQqhzTKA7esd+O4ITQ+i/0e7jJgoWeW7z9FrvKaxRq8JjnWkqN5wPXwPbhseAU21J/q5yQplNoOMrONzen35KT5DJDrmSUXbkZ1QI9BaAyxWYY3XOO5JRb9LRfdFwpaookl9BaxQ1CYUPYDY6GufmO4YJZV5XSjzmdTGdr77q1CmGda6qpIviAyUSGVaT5Z5hDL7RaKjLDIYRWrz6KmkTwSv0Obx0Juw/sqIRBDrreoi8LCcHx8jQlUj3+SzI4NJpKafeppzkUHQ+7jZdqUf1N1zyjR0jwtkJ8zMKIpSm7+xpxuKEBuayk8WR/0loPPgARTpDz0LcjgaN1yPm20TzqXeOOHEQlF97y5Ih0WC7kH2Cp2ASJgnuk5bAI1ChI4TPQyuaN78bBs4kiAhK8ySrvsMX87noz705I6xTjcUmnYNX95xeagEogk7B74OV4G2UUnRPaIJm749zdO2+bEQZFBdQQJkpabfcMDVdS9ZQTO69k2l9X7PPHnUBqHNAbTxoREQK+zV8HtUT4x9OFEAcDRkGAkxtMzc6YmgMUNXOarex8QIRfd2308q8x4IwJrohfAehn4oBURw+IXWJDQCMD2OPNDnT+w6Ku4+vj12k9W2zslqbeCOSYQy73TfL6poGoYfEIUiMPAsPJDluZ9knCURTzixC40AAquklnIwNTSMNhgfu/lAlhfnB5Qu09WULd6V4B4FVdR2wn7Mw+LVtg0tNJ7HuHnHdzl3xf/4vaCa9oZHIBKJFNeRgXlBABMUwGKqwmybHxGhRQwpzgrNXpPxGvqrp/1ilfQy9oMyoIilmJEPZp0VkRAKk7QuXAIr7W95C+QJ4IMAf3cbuyv+xykDQOE5PF9ca3/paT+hguioVZRD4EPr2G9uJ3kQiyXN0lAJFCXpC+R++Df8Fh/DscgSDOrf+qMSEAAQEAQBACmus5t721Nqeg6BnM9q+bOhkatsc6htNSReTQofwwdwVDir87QBoHHGc+vn3oUQG3kLgEBJrX2sr32FNsuKa2lvaT0FpfW2raiWnu2zTf+3Ek2YcWgf4BbuzGe7T6EgAR++eb//GykVboDiNrbBtseSRy+NDBaJJ6kRVkCGgbmRuxF0CFy4lDvr3OGzECp12Wr7SGQwiXzryEU4t0R2cQVtk68JcBksWCV/UDt2na0YkL6mv4JTiZI625Q/PgdY+DvI4DqhKUiPXx+8sDDsIAxVmIcVrqRJpfW2ckyD3T9uXXB4fKP9YNz64JWy9SEeyg7JkAzJ/1v+AcUH8SFZNcShAAAAAElFTkSuQmCC"             alt="lagrimas LLoris" />
        </div>
        <div className="torso"></div>
        <div className="rightarm">
          <img
            src={require("../../multimedia/franceT.webp")}
            className="torso"alt="camiseta LLoris "
          />
        </div>
        <div className="legs">
          <div className="leftleg"></div>
          <div className="rightleg"></div>
        </div>
      </div>
      {/* NET */}
      <div className="net">
        <div className="grid"></div>
      </div>
      <div className="netBack">
        <div className="gridBack"></div>
      </div>
    </div>
  );
};
export default Goal;
