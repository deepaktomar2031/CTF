Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports MySql.Data.MySqlClient
Imports System.Data
Imports MySql.Data

Partial Class Basic
    Inherits System.Web.UI.Page

    Dim con As String = ConfigurationManager.ConnectionStrings("myConnectionString").ConnectionString
    Dim SQLConnection As New MySqlConnection(con)
    Dim cmd As New MySqlCommand
    Dim dr As MySqlDataReader

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        Try
            If Session("login") = Nothing Then
                Response.Redirect("Login.aspx", False)
            Else
                'Response.Redirect("WelcomeUser.aspx", False)
            End If
        Catch ex As Exception
            Response.Redirect("Home.aspx", False)
        End Try
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Session.Abandon()
        FormsAuthentication.SignOut()
        Response.Cookies("Basic.aspx").Expires = Now
        Session.Remove("login")
        Session.Clear()
        Session.RemoveAll()
        Response.Redirect("Home.aspx", False)
    End Sub
End Class
