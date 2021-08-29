function Calculadora() {
  this.display = document.querySelector(".display");

  this.captureClick = () => {
    document.addEventListener("click", e => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.addNumDisplay(el.innerText);
      }

      if(el.classList.contains("btn-clear")) {
          this.clear();
      }

      if(el.classList.contains("btn-del")) {
          this.delNumber();
      }
      
      if(el.classList.contains("btn-equal")) {
          this.doAccount();
      }

    });
  };

  this.keyPress = () => {
      document.addEventListener("keypress", e => {
          if(e.keyCode === 13) {
              this.doAccount();
          }
      })
  }

  this.addNumDisplay = (value) => {
    this.display.value += value;
    this.display.focus();
  };

  this.clear = () => {
      this.display.value = "";
  }

  this.init = () => {
    this.captureClick();
    this.keyPress();
  };

  this.delNumber = () => {
      this.display.value = this.display.value.slice(0, -1)
  }

  this.doAccount = () => {

    try {
        const account = eval(this.display.value);

        if(!account) {
            alert("Conta inválida.")
        }

        this,this.display.value = account;
    } catch (e) {
        alert("Conta inválida.")
        return;
    }
  }
}

const calculadora = new Calculadora();
calculadora.init();
