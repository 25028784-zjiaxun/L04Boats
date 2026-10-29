import { ScrollView, Text } from 'react-native';
import Boat from './components/Boat';

const App = () => {
    return (
        <ScrollView>
            <Text></Text>
            <Text>
                GetABoat - For Sale
            </Text>
            <Boat
                name="SEA RAY 500 SUNDANCER"
                icon_name="sailboat"
                icon_color="gray"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require('./img/sea_ray.jpg')}
            />
            <Boat
                name="FOUR WINNS HORIZON 180"
                icon_name="ship"
                icon_color="gray"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('./img/four_winns.jpg')}
            />

            <Boat
                name="FLIPPER 640 ST"
                icon_name="anchor"
                icon_color="gray"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require('./img/flipper.jpg')}
            />
            <Boat
                name="PRINCESS V48"
                icon_name="boat"
                icon_color="gray"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                poster={require('./img/princess.jpg')}
            />
            <Boat
                name="BAYLINER 175 BOWRIDER"
                icon_name="water"
                icon_color="gray"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require('./img/bayliner.jpg')}
            />
            <Boat
                name="FAIRLINE TARGA 47"
                icon_name="life-ring"
                icon_color="gray"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                poster={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default App;