import RNFS from 'react-native-fs';
export default async function getInfo(path: string) {
  console.log('getInfo');
  const dash = await RNFS.readDir(path);
  console.log(dash);
}
