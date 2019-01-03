import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "OptimoTab",
        children: [
          {
            stack: {
              id: "OrderStack",
              children: [
                {
                  component: {
                    name: "Orders",
                    options: {
                      topBar: {
                        title: {
                          text: "Ordenes"
                        }
                      },
                      bottomTab: {
                        text: "Ordenes",
                        textColor: "gray",
                        selectedTextColor: "#007aff",
                        fontSize: 12,
                        selectedIconColor: "#007aff",
                        iconColor: "gray"
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
});
