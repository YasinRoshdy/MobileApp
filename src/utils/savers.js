import {PermissionsAndroid, Alert, Platform, Share} from "react-native";
import ReactNativeBlobUtil from "react-native-blob-util";
import { useDispatch} from 'react-redux';
import { baseUrl } from "../../app.json";
import {setIsSuraVideoTafsirLoading} from "../redux/actions/quranActions";

// const downloadFile = (url, localPath, file_name) => {
//   let FILE_URL = `${baseUrl}${url.startsWith("/") ? url.slice(1) : url}`;
//   let file_ext = getFileExtension(FILE_URL);
//   file_ext = "." + file_ext[0];

//   const {
//     dirs: { DownloadDir, DocumentDir },
//   } = ReactNativeBlobUtil.fs;
//   const { config } = ReactNativeBlobUtil;
//   let RootDir = Platform.OS === "ios" ? DocumentDir : DownloadDir;

//   //   let RootDir = fs.dirs.DownloadDir + "/Mouasah";

//   let fullPath = RootDir + localPath;
//   console.log(RootDir + localPath + "/file_" + file_name + file_ext);
//   let options = {
//     // fileCache: true,
//     // addAndroidDownloads: {
//     //   path: fullPath + "/file_" + file_name + file_ext,
//     //   title: "جارى تحميل الملف",
//     //   description: "Downloading File...",
//     //   notification: true,
//     //   useDownloadManager: true,
//     // },
//     ios: {
//       fileCache: true,
//       path: fullPath + "/file_" + file_name + file_ext,
//       // mime: 'application/xlsx',
//       // appendExt: 'xlsx',
//       //path: filePath,
//       //appendExt: fileExt,
//       notification: true,
//     },

//     android: {
//       fileCache: false,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         path: fullPath + "/file_" + file_name + file_ext,
//         description: "Downloading xlsx...",
//       },
//     },
//   };

//   config(options)
//     .fetch("GET", FILE_URL)
//     .then((res) => {
//       Alert.alert("عملية ناجحة", `تم تحميل الملف بنجاح.`);
//     })
//     .catch((error) => {
//       console.log("Save Item Error:", error);
//     });
// };
const downloadFile = (url, localPath, file_name) => {
  let FILE_URL = `${url.startsWith("/") ? url.slice(1) : url}`;
  console.log("Downloading...", FILE_URL)
  let file_ext = getFileExtension(FILE_URL);
  file_ext = "." + file_ext[0];
  var date = new Date();
  const {
    dirs: { DownloadDir, DocumentDir },
  } = ReactNativeBlobUtil.fs;
  const { config } = ReactNativeBlobUtil;
  const isIOS = Platform.OS == "ios";
  const aPath = Platform.select({ ios: DocumentDir, android: DownloadDir });
  const fPath =
    aPath +
    "/" +
    Math.floor(date.getTime() + date.getSeconds() / 2) +
    "/file_" +
    file_name +
    file_ext;

  const configOptions = Platform.select({
    ios: {
      fileCache: true,
      path: fPath,
      // mime: 'application/xlsx',
      // appendExt: 'xlsx',
      //path: filePath,
      //appendExt: fileExt,
      notification: true,
    },

    android: {
      fileCache: false,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: fPath,
        description: "Downloading xlsx...",
      },
    },
  });

  if (isIOS) {
    config(configOptions)
      .fetch("GET", FILE_URL)
      .then((res) => {
        //this.refs.toast.show('File download successfully');
        setTimeout(() => {
          // RNFetchBlob.ios.previewDocument('file://' + res.path());
          ReactNativeBlobUtil.ios.openDocument(res.data);
          // Alert.alert(CONSTANTS.APP_NAME,'File download successfully');
          Alert.alert("عملية ناجحة", `تم تحميل الملف بنجاح.`);
        }, 300);
      })
      .catch((errorMessage) => {
        console.log(errorMessage, 2000);
      });
  } else {
    config(configOptions)
      .fetch("GET", FILE_URL)
      .then((res) => {
        ReactNativeBlobUtil.android.actionViewIntent(res.path());
        console.log("File download successfully", 2000);
        Alert.alert("عملية ناجحة", `تم تحميل الملف بنجاح.`);
      })
      .catch((errorMessage, statusCode) => {
        console.log(errorMessage, 2000);
      });
  }
};
const getFileExtension = (fileUrl) => {
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

export const checkPermission = async (url, localPath, file_name) => {
  if (Platform.OS === "ios") {
    downloadFile(url, localPath, file_name);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "الوصول إلى وحدة التخزين",
          message: "يحتاج التطبيق للوصول إلى وحدة التخزين لحفظ الملفات.",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile(url, localPath, file_name);
      } else {
        Alert.alert("خطأ", "برجاء السماح للتطبيق بحفظ الملفات");
      }
    } catch (error) {
      console.log("Permission Error:", error);
    }
  }
};

export const saveSuraAyatTelawaAudio = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveSuraAyatTafsirAudio = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveSuraAyatTafsirVideo = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveHadithTafsirAudio = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveHadithTafsirVideo = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveOtherScienceAudio = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveOtherScienceVideo = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveBook = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveArticle = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveFatwaAudio = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const saveSessionVideo = (url, localPath, file_name) => {
  checkPermission(url, localPath, file_name);
};

export const onShare = async (shareLink) => {
  try {
    await Share.share({
      title: "Link",
      message: shareLink,
      url: shareLink,
    });
  } catch (error) {
    console.error(error.message);
  }
};
