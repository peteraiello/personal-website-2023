const formatTag = (string) => {
  return string?.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-") 
}

export default formatTag;