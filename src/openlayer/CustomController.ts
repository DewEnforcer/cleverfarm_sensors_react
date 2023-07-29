import Control from "ol/control/Control";
import { ICustomController } from "../interfaces/CustomController";

class CustomController extends Control {
    public options: ICustomController;
    
    constructor(opts: ICustomController) {
        
      const options = opts;
      const DEFAULT_CLASSNAME = 'ol-custom-controller ol-unselectable ol-control';
  
      const button = document.createElement('button');
      button.innerHTML = options.htmlContent ?? "CB";

      button.title = options.title ?? "Custom title";
  
      const element = document.createElement('div');
      element.className = `${DEFAULT_CLASSNAME} ${options.className}`;
      element.appendChild(button);
  
      super({
        element: element,
        target: options.target,
      });

      this.options = options;
  
      button.addEventListener('click', this.handleClick.bind(this), false);
    }
  
    handleClick() {
      const map = this.getMap();
      if (!map) return console.error("No map object found, cannot handle click for: ", this);

      if (!this.options.onClick) return;

      this.options.onClick(map);
    }
}


export default CustomController;