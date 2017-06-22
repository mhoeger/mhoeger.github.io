# -*- coding: utf-8 -*-
# @Author: Marie Hoeger
# @Date:   2017-06-22 14:53:43
# @Last Modified by:   Marie Hoeger
# @Last Modified time: 2017-06-22 15:05:15

FILE_OUT = "ImageData.json"
people_to_include = ["Marie"]
dropbox_extensions = { "Marie":
	{ "link": "https://dl.dropboxusercontent.com/s/nv42ml3e6b8cks5/",
	"images": ["2017-06-19%2013.16.06.jpg"]}
}

def write_file():
	print dropbox_extensions[people_to_include[0]]
	f = open(FILE_OUT, "w")
	f.write("hello\n")
	f.write("world")

print "hello"
write_file()