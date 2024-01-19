import { InputControl, TextareaControl } from "./FormControllers";

const getFieldController = (type) => {
    switch (type) {
        case 'input':
            return InputControl;
        case 'textarea':
            return TextareaControl;
        default:
            throw new Error(`Unsupported field type: ${type}`);
    }
}

export default getFieldController;
