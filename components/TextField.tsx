import { StyleSheet, TextInput, TextInputProps } from "react-native"

const TextField: React.FC<TextInputProps> = (props) => {
    return <TextInput style={styles.field} {...props} />
}

export default TextField;

const styles = StyleSheet.create({
    field: {
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#4D7C8A',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10
    }
});