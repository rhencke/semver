var searchIndex = {};
searchIndex['semver'] = {"items":[[0,"","semver","Semantic version parsing and comparison.",null,null],[3,"Version","","Represents a version number conforming to the semantic versioning scheme.",null,null],[12,"major","","The major version, to be incremented on incompatible changes.",0,null],[12,"minor","","The minor version, to be incremented when functionality is added in a\nbackwards-compatible manner.",0,null],[12,"patch","","The patch version, to be incremented when backwards-compatible bug\nfixes are made.",0,null],[12,"pre","","The pre-release version identifier, if one exists.",0,null],[12,"build","","The build metadata, ignored when determining version precedence.",0,null],[3,"VersionReq","","A `VersionReq` is a struct containing a list of predicates that can apply to ranges of version\nnumbers. Matching operations can then be done with the `VersionReq` against a particular\nversion to see if it satisfies some or all of the constraints.",null,null],[4,"Identifier","","An identifier in the pre-release or build metadata.",null,null],[13,"Numeric","","An identifier that's solely numbers.",1,null],[13,"AlphaNumeric","","An identifier with letters and numbers.",1,null],[4,"ParseError","","A `ParseError` is returned as the `Err` side of a `Result` when a version is attempted\nto be parsed.",null,null],[13,"NonAsciiIdentifier","","All identifiers must be ASCII.",2,null],[13,"IncorrectParse","","The version was mis-parsed.",2,null],[13,"GenericFailure","","Any other failure.",2,null],[4,"ReqParseError","","A `ReqParseError` is returned from methods which parse a string into a `VersionReq`. Each\nenumeration is one of the possible errors that can occur.",null,null],[13,"InvalidVersionRequirement","","The given version requirement is invalid.",3,null],[13,"OpAlreadySet","","You have already provided an operation, such as `=`, `~`, or `^`. Only use one.",3,null],[13,"InvalidSigil","","The sigil you have written is not correct.",3,null],[13,"VersionComponentsMustBeNumeric","","All components of a version must be numeric.",3,null],[13,"MajorVersionRequired","","At least a major version is required.",3,null],[13,"UnimplementedVersionRequirement","","An unimplemented version requirement.",3,null],[11,"fmt","","",1,{"inputs":[{"name":"identifier"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",1,null],[11,"cmp","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"identifier"}],"output":{"name":"identifier"}}],[11,"fmt","","",1,{"inputs":[{"name":"identifier"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"version"}],"output":{"name":"version"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"parseerror"},{"name":"parseerror"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"parseerror"}],"output":{"name":"parseerror"}}],[11,"parse","","Parse a string into a semver object.",0,{"inputs":[{"name":"version"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"ordering"}}],[11,"fmt","","",2,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,{"inputs":[{"name":"version"},{"name":"h"}],"output":null}],[11,"fmt","","",4,{"inputs":[{"name":"versionreq"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"versionreq"}],"output":{"name":"versionreq"}}],[11,"eq","","",4,{"inputs":[{"name":"versionreq"},{"name":"versionreq"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"versionreq"},{"name":"versionreq"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"reqparseerror"},{"name":"reqparseerror"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"reqparseerror"},{"name":"reqparseerror"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"reqparseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"reqparseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"reqparseerror"}],"output":{"name":"str"}}],[11,"any","","`any()` is a factory method which creates a `VersionReq` with no constraints. In other\nwords, any version will match against it.",4,{"inputs":[{"name":"versionreq"}],"output":{"name":"versionreq"}}],[11,"parse","","`parse()` is the main constructor of a `VersionReq`. It turns a string like `\"^1.2.3\"`\nand turns it into a `VersionReq` that matches that particular constraint.",4,{"inputs":[{"name":"versionreq"},{"name":"str"}],"output":{"name":"result"}}],[11,"exact","","`exact()` is a factory method which creates a `VersionReq` with one exact constraint.",4,{"inputs":[{"name":"versionreq"},{"name":"version"}],"output":{"name":"versionreq"}}],[11,"matches","","`matches()` matches a given `Version` against this `VersionReq`.",4,{"inputs":[{"name":"versionreq"},{"name":"version"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"versionreq"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Version"],[4,"Identifier"],[4,"ParseError"],[4,"ReqParseError"],[3,"VersionReq"]]};
initSearch(searchIndex);
