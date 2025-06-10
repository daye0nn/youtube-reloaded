import Video from "../models/video";

// export const home = (req, res) => {
//   Video.find({})
//     .then((videos) => console.log("videos", videos))
//     .catch((error) => console.log("errors", error));
//   console.log("Start");
//   return res.render("home", { pageTitle: "Home", videos: [] });
// };

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-Error", { error });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  // const video = videos[id - 1];
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  // const video = videos[id - 1];
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  // videos[id - 1].title = title;
  // const video = await Video.findById(id);
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });

  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => {
  return res.send("Video Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
