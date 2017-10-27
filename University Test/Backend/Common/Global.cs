using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace University_Test.Common
{
  public static class Global
  {
    private const string UserName = "WebUser";
    private const string Password = "WebUserPassword";
    private static string Server = "LAPTOP-LVO3JS67\\SQLEXPRESS";
    private static string Database = "University";

    public static string ConnectionString = $"Server={Server};database={Database};uid={UserName};pwd={Password};pooling=false;";

    public static SqlConnection Sql()
    {
      return new SqlConnection(ConnectionString);
    }
  }
}
