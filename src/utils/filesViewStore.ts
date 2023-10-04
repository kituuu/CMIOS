import {create} from 'zustand';

export interface FilesViewState {
  fileCat: string;
  fileImg: any;
  showFiles: Boolean;
  setShowFiles: (show: Boolean) => void;
  setFileCat: (fileCat: string) => void;
  setFileImg: (fileImg: any) => void;
  allFilesImg: object;
}

const useFilesViewStore = create<FilesViewState>(set => ({
  showFiles: false,
  fileImg: '',
  fileCat: '',
  allFilesImg: {
    folder: require('../Assets/icons/Folder.png'),
    Photos: require('../Assets/icons/Photos.png'),
    Videos: require('../Assets/icons/Videos.png'),
    Docs: require('../Assets/icons/Docs.png'),
    Others: require('../Assets/icons/Music.png'),
  },
  setShowFiles: (show: Boolean) => {
    // const show1 = !get().show;
    set({showFiles: show});
  },
  setFileImg: (fileImg: any) => {
    // const show1 = !get().show;
    set({fileImg: fileImg});
  },
  setFileCat: (fileCat: string) => {
    // const show1 = !get().show;
    set({fileCat: fileCat});
  },
}));

export default useFilesViewStore;
