import express from "express";

export const trending = (req, res) => {
  return res.render("home");
};

export const see = (req, res) => {
  return res.render("watch");
};

export const edit = (req, res) => {
  return res.send("Video Edit");
};
export const search = (req, res) => {
  return res.send("Video Search");
};
export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};
export const upload = (req, res) => {
  return res.send("Video Upload");
};
