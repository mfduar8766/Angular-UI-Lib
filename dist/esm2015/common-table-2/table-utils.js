export const ASC = 'ASC';
export const DESC = 'DESC';
export const handleAscSort = (tableData, selectedHeader) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return a[selectedHeader] - b[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return a[selectedHeader].localeCompare(b[selectedHeader]);
    }
    return null;
  });
export const handleDescSort = (tableData, selectedHeader) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return b[selectedHeader] - a[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return b[selectedHeader].localeCompare(a[selectedHeader]);
    }
    return null;
  });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXRhYmxlLTIvdGFibGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBTzNCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLFNBQWdCLEVBQUUsY0FBc0IsRUFBRSxFQUFFLENBQ3hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEIsSUFBSSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2xGLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUM5QztTQUFNLElBQUksT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RixPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUwsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBZ0IsRUFBRSxjQUFzQixFQUFFLEVBQUUsQ0FDekUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN0QixJQUFJLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDbEYsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzlDO1NBQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3pGLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVNDID0gJ0FTQyc7XG5leHBvcnQgY29uc3QgREVTQyA9ICdERVNDJztcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlcnMge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb3A6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFzY1NvcnQgPSAodGFibGVEYXRhOiBhbnlbXSwgc2VsZWN0ZWRIZWFkZXI6IHN0cmluZykgPT5cbiAgdGFibGVEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAodHlwZW9mIGFbc2VsZWN0ZWRIZWFkZXJdID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYltzZWxlY3RlZEhlYWRlcl0gPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYVtzZWxlY3RlZEhlYWRlcl0gLSBiW3NlbGVjdGVkSGVhZGVyXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhW3NlbGVjdGVkSGVhZGVyXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGJbc2VsZWN0ZWRIZWFkZXJdID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGFbc2VsZWN0ZWRIZWFkZXJdLmxvY2FsZUNvbXBhcmUoYltzZWxlY3RlZEhlYWRlcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEZXNjU29ydCA9ICh0YWJsZURhdGE6IGFueVtdLCBzZWxlY3RlZEhlYWRlcjogc3RyaW5nKSA9PlxuICB0YWJsZURhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmICh0eXBlb2YgYVtzZWxlY3RlZEhlYWRlcl0gPT09ICdudW1iZXInIHx8IHR5cGVvZiBiW3NlbGVjdGVkSGVhZGVyXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBiW3NlbGVjdGVkSGVhZGVyXSAtIGFbc2VsZWN0ZWRIZWFkZXJdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFbc2VsZWN0ZWRIZWFkZXJdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYltzZWxlY3RlZEhlYWRlcl0gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYltzZWxlY3RlZEhlYWRlcl0ubG9jYWxlQ29tcGFyZShhW3NlbGVjdGVkSGVhZGVyXSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KTtcbiJdfQ==