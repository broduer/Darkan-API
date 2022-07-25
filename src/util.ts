export class Utils {
    static formatNameForProtocol(name: string) {
        name = name.replace(/ /g, '_');
		name = name.toLowerCase();
        return name;
    }
    
    static formatNameForDisplay(name: string) {
        let newName = '';
        name = name.replace(/_/g, ' ');
		name = name.toLowerCase();
        let wasSpace = true;
        for (let i = 0; i < name.length; i++) {
			if (wasSpace) {
				newName += ('' + name.charAt(i)).toUpperCase();
				wasSpace = false;
			} else {
				newName += name.charAt(i);
			}
			if (name.charAt(i) == ' ') {
				wasSpace = true;
			}
		}
    }
}