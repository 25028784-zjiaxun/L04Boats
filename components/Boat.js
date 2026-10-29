import { View, Text, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({ name, icon_name, icon_color, description, poster }) => {
    return (
        <View>
            <Text style={{ fontSize: 22, fontWeight: 'bold',color:'grey', }}>
                <FontAwesome6
                    name={icon_name}
                    size={22}
                    color={icon_color}/>
                {name}
            </Text>
            <Text>
                {description}
            </Text>

            <Image
                source={poster}
                style={{ width:400,height:300 }}/>
        </View>
    );
};

export default Boat;