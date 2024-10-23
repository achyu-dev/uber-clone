import { TextInput,
    View,
    Text,
    Image, 
    KeyboardAvoidingView,
    TouchableNativeFeedback
 } from "react-native";

const InputField = () => ({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
});

export default InputField;
