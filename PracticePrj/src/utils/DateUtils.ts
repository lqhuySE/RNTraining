export default class DateUtils {
  public static getCurrentDateTime = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const second = new Date().getSeconds();

    return (
      date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + second
    );
  };
}
