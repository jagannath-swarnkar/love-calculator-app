import * as React from 'react';
import { StyleSheet , Dimensions} from 'react-native';
import { Appbar } from 'react-native-paper';
var width = Dimensions.get('window').width;

const Header = (props) => {
  const {backArrow} = props;
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.head_cont}>
      {backArrow && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title="Love Calculator" subtitle="" />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
    head_cont: {
        backgroundColor: "#ff009e",
        // alignSelf: 'stretch',
        width: width,
        // height: 50,
    }
})