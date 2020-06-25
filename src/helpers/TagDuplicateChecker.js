class RemoveDuplicates {
  static removeDuplicates(notTagged) {
    const list = Array.from(new Set(notTagged.map(a => a.tag_name))).map(tag_name => {
      return notTagged.find(a => a.tag_name === tag_name);
    });

    return list;
  }
}

export default RemoveDuplicates;
