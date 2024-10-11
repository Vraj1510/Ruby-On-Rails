// app/javascript/controllers/confirmation_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static values = { message: String }

  connect() {
    console.log("Confirmation controller is connected!")
  }

  confirm(event) {
    if (!(window.confirm(this.messageValue))) {
      event.preventDefault()
      event.stopImmediatePropagation()
    }
  }
}
